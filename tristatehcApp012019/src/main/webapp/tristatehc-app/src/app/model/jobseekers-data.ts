import { FacilityRelation } from '../model/facility-relation';

export class JobseekersData {
    lastName : string;
    firstName : string;
    middleInitial: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    homePhone: string;
    cellPhone: string;
    cellPhoneProvider:string;
    email: string;
    email2: string;
    
    ssn: string;
    adult: string;
    emergencyContact: string;
    emergencyPhone: string;
    positions: string;
    unavailable: string;
    highSchoolName: string;
    highSchoolAddress: string;
    highSchoolYears: number;
    highSchoolDegree: string;
    collegeName: string;
    collegeAddress: string;
    collegeYears: number;
    collegeDegree: string;
    tradeName: string;
    tradeAddress: string;
    tradeYears: number;
    tradeDegree: string;
    graduateName: string;
    graduateAddress: string;
    graduateYears: number;
    graduateDegree: string;
    refName1:string;
    refPosition1: string;
    ref1FacilityName: string;
    refAddress1: string;
    refPhone1: string;
    refName2: string;
    refPosition2: string;
    ref2FacilityName: string;
    refAddress2: string;
    refPhone2: string;
    bankName : string;
    bankAddress: string;
    bankCity: string;
    bankState: string;
    bankZip: string;
    accountType: string;
    accountNumber: string;
    routingNumber: string;
    id : string;
    idExpiry: string;
    medLicenseNumber: string;
    licenseState: string;
    medLicenseExpiry:string;
    status:string;
    comments:string;
    myComments:string;
    rate:number;
    lastUpdatedBy:string;
    relation:FacilityRelation[];
    dlicence: any = [];
    mlicence: any = [];
    
}