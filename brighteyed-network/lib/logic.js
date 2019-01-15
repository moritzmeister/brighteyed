/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * A Member grants access to their record to a Doctor.
 * @param {org.brighteyed.network.AuthorizeAccess} authorize - the authorize to be processed
 * @transaction
 */
async function authorizeAccess(authorize) {  // eslint-disable-line no-unused-vars

    const me = getCurrentParticipant();
    console.log('**** AUTH: ' + me.getIdentifier() + ' granting access to ' + authorize.nie);

    if (!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }

    // if the member is not already authorized, we authorize them
    let index = -1;

    if (!me.authorized) {
        me.authorized = [];
    }
    else {
        index = me.authorized.indexOf(authorize.nie);
    }

    if (index < 0) {
        me.authorized.push(authorize.nie);

        // emit an event
        const event = getFactory().newEvent('org.brighteyed.network', 'AccessEvent');
        event.accessTransaction = authorize;
        emit(event);

        // persist the state of the member
        const memberRegistry = await getParticipantRegistry('org.brighteyed.network.Patient');
        await memberRegistry.update(me);
    }
}

/**
 * A Patient revokes access to their record from a Doctor.
 * @param {org.brighteyed.network.RevokeAccess} revoke - the RevokeAccess to be processed
 * @transaction
 */
async function revokeAccess(revoke) {  // eslint-disable-line no-unused-vars

    const me = getCurrentParticipant();
    console.log('**** REVOKE: ' + me.getIdentifier() + ' revoking access to ' + revoke.nie);

    if (!me) {
        throw new Error('A participant/certificate mapping does not exist.');
    }

    // if the member is authorized, we remove them
    const index = me.authorized ? me.authorized.indexOf(revoke.nie) : -1;

    if (index > -1) {
        me.authorized.splice(index, 1);

        // emit an event
        const event = getFactory().newEvent('org.brighteyed.network', 'AccessEvent');
        event.accessTransaction = revoke;
        emit(event);

        // persist the state of the member
        const memberRegistry = await getParticipantRegistry('org.brighteyed.network.Patient');
        await memberRegistry.update(me);
    }
}

/**
 * A Member revokes access to their record from another Member.
 * @param {org.brighteyed.network.AddRecordTransaction} transaction - the Record to be added
 * @transaction
 */
async function addRecord(transaction) {  // eslint-disable-line no-unused-vars

    const patient = transaction.patient;
    console.log('**** ADDING record to: ' + patient.getIdentifier());

    if (!patient) {
        throw new Error('A participant/certificate mapping does not exist.');
    }

    if (!patient.myRecords) {
        patient.myRecords = [];
    }
  
  	patient.myRecords.push(transaction.addedRecord);

    // emit an event
    const event = getFactory().newEvent('org.brighteyed.network', 'AddRecordEvent');
    event.addRecordTransaction = transaction;
    emit(event);

    // persist the state of the member
    const memberRegistry = await getParticipantRegistry('org.brighteyed.network.Patient');
    await memberRegistry.update(patient);

}
