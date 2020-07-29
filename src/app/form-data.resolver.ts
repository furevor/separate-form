import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormManagerService } from './form-manager.service';

@Injectable({
    providedIn: 'root',
})
export class FormDataResolver implements Resolve<FormGroup> {
    constructor(private formManagerService: FormManagerService) {}

    resolve() {
        return null;
    }
}
