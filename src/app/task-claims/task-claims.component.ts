import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: './task-claims.component.html',
    styleUrls: ['./task-claims.component.scss']
})
export class TaskClaimsComponent implements OnInit {

    title = 'Lopende aanvragen';
    hideFinishedClaims = true;
    hidePendingClaims = false;

    constructor() { }

    ngOnInit() {
    }

    finishedClaimsButton() {
        this.title = 'Afgewerkte aanvragen';

        this.hidePendingClaims = true;
        this.hideFinishedClaims = false;
    }

    claimsButton() {
        this.title = 'Lopende aanvragen';

        this.hidePendingClaims = false;
        this.hideFinishedClaims = true;
    }
}
