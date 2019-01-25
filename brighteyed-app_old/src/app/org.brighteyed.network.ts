import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.brighteyed.network{
   export class Record {
      date: Date;
      incident: string;
      prescriptions: string[];
      doctor: Doctor;
   }
   export abstract class Person extends Participant {
      nie: string;
      firstName: string;
      lastName: string;
      email: string;
   }
   export class Doctor extends Person {
      myPatients: string[];
   }
   export class Patient extends Person {
      authorized: string[];
      myRecords: Record[];
   }
   export abstract class AccessTransaction extends Transaction {
      doctor: Doctor;
   }
   export class AuthorizeAccess extends AccessTransaction {
   }
   export class RevokeAccess extends AccessTransaction {
   }
   export class AccessEvent extends Event {
      accessTransaction: AccessTransaction;
   }
   export class AddRecordTransaction extends Transaction {
      addedRecord: Record;
      patient: Patient;
   }
   export class AddRecordEvent extends Event {
      addRecordTransaction: AddRecordTransaction;
   }
// }
