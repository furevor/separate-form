import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormManagerService } from '../form-manager.service';

@Component({
    selector: 'app-step3',
    templateUrl: './step3.component.html',
    styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
    transport: FormGroup;
    constructor(private router: Router, private formManagerService: FormManagerService) {
        this.transport = this.formManagerService.getForm().get('transport') as FormGroup;
    }

    ngOnInit() {
        this.transport.valueChanges.subscribe((val) => {
            console.log(val);
        });
    }

    goPrev() {
        this.router.navigate(['step2']);
    }

    sendForm() {
        this.formManagerService.sendForm();
    }
}
