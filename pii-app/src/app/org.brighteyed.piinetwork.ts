import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.brighteyed.piinetwork{
   export class Address {
      street: string;
      house: string;
      city: string;
      county: string;
      country: string;
      zip: string;
   }
   export class Member extends Participant {
      email: string;
      firstName: string;
      lastName: string;
      dob: Date;
      address: Address;
      authorized: string[];
   }
   export abstract class MemberTransaction extends Transaction {
      memberId: string;
   }
   export class AuthorizeAccess extends MemberTransaction {
   }
   export class RevokeAccess extends MemberTransaction {
   }
   export class MemberEvent extends Event {
      memberTransaction: MemberTransaction;
   }
// }
