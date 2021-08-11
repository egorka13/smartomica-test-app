import {Injectable, Type} from '@angular/core';
import {IPatientProfile} from '../../models/patient-profile.model';

@Injectable({
    providedIn: 'root',
})
export class PatientProfileService {

    private initialPatientProfileData: IPatientProfile = {
        personalData: {
            firstName: '',
            lastName: '',
            middleName: '',
            age: null,
            sex: '',
        },
        date: null,
        complaints: '',
    };

    public patientProfile: IPatientProfile = JSON.parse(JSON.stringify(this.initialPatientProfileData));

    /**
     * This function updates personal patient data.
     * @param {Type<IPatientProfile>} personalData - personalData to update.
     * @memberof PatientProfileService
     */
    public updatePatientProfile(personalData: IPatientProfile): void {
        personalData.date = PatientProfileService.formatDate(personalData.date as Date);
        this.patientProfile = JSON.parse(JSON.stringify(personalData));
    }

    /**
     * This function resets personal patient data.
     * @memberof PatientProfileService
     */
    public resetPersonalData(): void {
        this.patientProfile = JSON.parse(JSON.stringify(this.initialPatientProfileData));
    }

    /**
     * This function formats date value.
     * @memberof PatientProfileService
     */
    private static formatDate(date: Date): string {
        let year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
        let month = new Intl.DateTimeFormat('en', {month: 'short'}).format(date);
        let day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
        return `${day}-${month}-${year}`;
    }
}
