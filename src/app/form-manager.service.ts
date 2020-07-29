import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormManagerService {
    mainForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.mainForm = fb.group({
            userData: fb.group({
                name: [''],
                secondName: [''],
            }),
            destinationAddress: fb.group({
                country: [''],
                city: [''],
            }),
            transport: fb.group({
                transportType: ['option1'],
            }),
        });
    }

    getForm(): FormGroup {
        return this.mainForm as FormGroup;
    }

    sendForm(): void {
        console.log('ready form', this.mainForm.value);
    }
}
