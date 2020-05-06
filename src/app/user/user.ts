import { Authority } from '../authority/authority';

export class User {
    userID: number;
    fullName: string;
    dob: Date;
    phoneNumber: string;
    email: string;
    password: string;
    nationalID: string;
    enabled: number;
    authdata?: string;
    authorityName: Authority;
}