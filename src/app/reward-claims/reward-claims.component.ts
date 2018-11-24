import {Component, OnInit} from '@angular/core';
import { RewardClaimService } from '../services/reward-claim.service';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-rewards',
  templateUrl: './reward-claims.component.html',
  styleUrls: ['./reward-claims.component.scss']
})
export class RewardClaimsComponent implements OnInit {

    claims$: Observable<any>;

    title = 'Lopende aanvragen';
    hideFinishedClaims = true;
    hidePendingClaims = false;

    constructor(private rewardClaimService: RewardClaimService) {}

    ngOnInit() {
        this.getClaims('finished');
    }

    getClaims(status) {
        this.claims$ = this.rewardClaimService.getClaims();
        console.log(status);
    }

    finishedClaimsButton() {
        this.getClaims('finished');

        this.title = 'Afgewerkte aanvragen';
        this.hidePendingClaims = true;
        this.hideFinishedClaims = false;
    }

    claimsButton() {
        this.getClaims('unfinished');

        this.title = 'Lopende aanvragen';
        this.hidePendingClaims = false;
        this.hideFinishedClaims = true;
    }
}
