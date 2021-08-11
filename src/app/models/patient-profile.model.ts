export interface IPatientProfile {
    personalData: IPersonalData;
    date: Date | string | null;
    complaints: string;
}

export interface IPersonalData {
    firstName: string;
    lastName: string;
    middleName: string;
    age: number | null;
    sex: string;
}
