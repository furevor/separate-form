import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-step3',
    templateUrl: './step3.component.html',
    styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    goPrev() {
        this.router.navigate(['step2']);
    }
}
