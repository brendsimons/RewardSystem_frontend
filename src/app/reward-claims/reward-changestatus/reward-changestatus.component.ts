import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RewardClaimService } from '../../services/reward-claim.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../../services/api.service';

export interface Status {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-changestatus',
    templateUrl: './reward-changestatus.component.html',
    styleUrls: ['./reward-changestatus.component.scss']
})
export class RewardChangestatusComponent implements OnInit {
    selectedValue: string;
    claimId;
    claim: any;

    constructor(private router: Router, private route: ActivatedRoute, private rewardClaimService: RewardClaimService, private http: HttpClient, private api: APIService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.claimId = params.id;
        });

        this.rewardClaimService.getClaim(this.claimId).subscribe(
            result => this.claim = result,
            err => console.log('Could not authenticate')
        );

        console.log(this.claim);
    }

    public submit() {
        this.rewardClaimService.updateClaimStatus(this.claimId, this.selectedValue).subscribe(
            claimupdate => {
                if (this.selectedValue === "Niet toegekend") {
                    this.http.put(this.api.getUrl("/users/" + this.claim.user.id), { credits: this.claim.user.credits + this.claim.reward.score }).subscribe(
                        result => {
                            this.router.navigate(['/rewardClaims']);
                        },
                        err => console.log('Could not authenticate')
                    );
                } else {
                    this.router.navigate(['/rewardClaims']);
                }
            },
            err => console.log('Could not authenticate')
        );
    }

    public backLink() {
        this.router.navigate(['/rewardClaims']);
    }

}
