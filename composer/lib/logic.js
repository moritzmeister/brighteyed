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
 * Add doctor transaction
 * @param {org.example.mynetwork.AddDoctor} addDoctorTransaction
 * @transaction
 */
async function addDoctorTransaction(adt) {
    // Add the doctor to the list of doctors in the record
    adt.record.doctors.push(adt.doctor)

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.mynetwork.Record');
    // Update the asset in the asset registry.
    await assetRegistry.update(adt.record);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.mynetwork', 'AddDoctorEvent');
    event.record = adt.record;
    event.doctor = adt.doctor;
    emit(event);
}

/**
 * Remove doctor transaction
 * @param {org.example.mynetwork.RemoveDoctor} removeDoctorTransaction
 * @transaction
 */

async function removeDoctorTransaction(rdt) {
    // Add the doctor to the list of doctors in the record
    rdt.record.doctors.pop(rdt.doctor)

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.example.mynetwork.Record');
    // Update the asset in the asset registry.
    await assetRegistry.update(rdt.record);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.example.mynetwork', 'RemoveDoctorEvent');
    event.record = rdt.record;
    event.doctor = rdt.doctor;
    emit(event);
}