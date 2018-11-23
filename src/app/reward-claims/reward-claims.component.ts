import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './reward-claims.component.html',
  styleUrls: ['./reward-claims.component.scss']
})
export class RewardClaimsComponent implements OnInit {
    hideFinishedClaims = true;
    hidePendingClaims = false;

    constructor() { }

    ngOnInit() {
    }

    finishedClaimsButton() {
        this.hidePendingClaims = true;
        this.hideFinishedClaims = false;
    }

    claimsButton() {
        this.hidePendingClaims = false;
        this.hideFinishedClaims = true;
    }
}