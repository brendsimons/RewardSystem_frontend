import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './reward-claims.component.html',
  styleUrls: ['./reward-claims.component.scss']
})
export class RewardClaimsComponent implements OnInit {

    status = 'unfinished';
    title = 'Lopende aanvragen';
    hideFinishedClaims = true;
    hidePendingClaims = false;

    constructor() {}

    ngOnInit() {
    }

    finishedClaimsButton() {
        this.title = 'Afgewerkte aanvragen';
        this.status = 'finished';

        this.hidePendingClaims = true;
        this.hideFinishedClaims = false;
    }

    claimsButton() {
        this.title = 'Lopende aanvragen';
        this.status = 'ufinished';

        this.hidePendingClaims = false;
        this.hideFinishedClaims = true;
    }
}
