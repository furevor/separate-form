import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormManagerService } from '../form-manager.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-step1',
    templateUrl: './step1.component.html',
    styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
    userData: FormGroup;
    constructor(private router: Router, private formManagerService: FormManagerService) {
        this.userData = this.formManagerService.getForm().get('userData') as FormGroup;
    }

    ngOnInit() {
        this.userData.valueChanges.subscribe((val) => {
            console.log(val);
        });
    }

    goNext() {
        this.router.navigate(['step2']);
    }
}
