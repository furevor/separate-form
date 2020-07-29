import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormManagerService } from '../form-manager.service';

@Component({
    selector: 'app-step2',
    templateUrl: './step2.component.html',
    styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
    destinationAddress: FormGroup;
    constructor(private router: Router, private formManagerService: FormManagerService) {
        this.destinationAddress = this.formManagerService.getForm().get('destinationAddress') as FormGroup;
    }

    ngOnInit() {
        this.destinationAddress.valueChanges.subscribe((val) => {
            console.log(val);
        });
    }

    goPrev() {
        this.router.navigate(['step1']);
    }
    goNext() {
        this.router.navigate(['step3']);
    }
}
