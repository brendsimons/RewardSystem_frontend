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

    hideFinishedClaims = true;
    hidePendingClaims = false;

    constructor(private rewardClaimService: RewardClaimService) {}

    ngOnInit() {
        this.getClaims();
    }

    getClaims() {
        this.claims$ = this.rewardClaimService.getClaims()
            .pipe(
                finalize(() => {
                    this.rewardClaimService.filterClaims(this.claims$, 'finished');
                    this.hideFinishedClaims = false;
                })
            );
    }

    finishedClaimsButton() {
        // this.claimTable.showFinishedClaims();

        this.hidePendingClaims = true;
        this.hideFinishedClaims = false;
    }

    claimsButton() {
        // this.claimTable.showClaims();

        this.hidePendingClaims = false;
        this.hideFinishedClaims = true;
    }
}
