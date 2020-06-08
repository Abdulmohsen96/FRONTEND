import { User } from '../user/user';
import { Organization } from '../organization/organization';

export class Certificate {
    certificateID: number;
    certificateName: string;
    certificateType: string;
    certificateDescription: string;
    certificateDate: string;
    certificateOrganization: Organization;
}