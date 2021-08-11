import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatListModule,
        MatDividerModule,
        MatRadioModule,
        MatSelectModule,
        MatCardModule,
        MatStepperModule,
    ],
    exports: [
        MatToolbarModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatListModule,
        MatDividerModule,
        MatRadioModule,
        MatSelectModule,
        MatCardModule,
        MatStepperModule,
    ],
    providers: [
        MatDatepickerModule,
    ]
})

export class AngularMaterialModule {
}
