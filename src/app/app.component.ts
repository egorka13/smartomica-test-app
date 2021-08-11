import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IPatientProfile} from './models/patient-profile.model';
import {PatientProfileService} from './core/services/patient-profile.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    isEditMode: boolean = false;

    patientProfileForm: FormGroup;

    personalData: FormGroup = new FormGroup({});

    constructor(public patientProfileService: PatientProfileService) {
        this.patientProfileForm = this.createFormGroup()
    }

    createFormGroup(): FormGroup {
        this.personalData = new FormGroup({
            firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
            middleName: new FormControl(),
            age: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
            sex: new FormControl('', [Validators.required]),
        });

        return new FormGroup({
            personalData: this.personalData,
            date: new FormControl(null),
            complaints: new FormControl('', [Validators.required]),
        });
    }

    onEditModeChange(): void {
        this.isEditMode = !this.isEditMode;
    }

    onSubmit(): void {
        if (this.patientProfileForm.valid) {
            const result: IPatientProfile = Object.assign({}, this.patientProfileForm.value);
            result.personalData = Object.assign({}, result.personalData);

            this.patientProfileService.updatePatientProfile(result);
            this.isEditMode = !this.isEditMode;
        } else {
            alert('Invalid form!')
        }
    }

    onReset(): void {
        this.patientProfileService.resetPersonalData();
        this.patientProfileForm.reset({
            personalData: {
                firstName: '',
                lastName: '',
                middleName: '',
                age: null,
                sex: '',
            },
            date: null,
            complaints: '',
        });
    }
}
