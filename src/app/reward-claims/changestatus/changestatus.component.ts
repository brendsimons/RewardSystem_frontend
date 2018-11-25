import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RewardClaimService} from '../../services/reward-claim.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {APIService} from '../../services/api.service';

export interface Status {
    value: string;
    viewValue: string;
}

@Component({
  selector: 'app-changestatus',
  templateUrl: './changestatus.component.html',
  styleUrls: ['./changestatus.component.scss']
})
export class ChangestatusComponent implements OnInit {
    selectedValue: string;
    claimId;
    claim: any;

    constructor(private router: Router, private route: ActivatedRoute, private rewardClaimService: RewardClaimService, private http: HttpClient, private api: APIService) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.claimId = params.id;
      });

      this.claim = this.rewardClaimService.getClaim(this.claimId).subscribe(

          result => console.log(this.claim),
          err =>  console.log('Could not authenticate')
      );

      console.log(this.claim);
  }

    public submit() {
        this.rewardClaimService.updateClaimStatus(this.claimId, this.selectedValue);
        this.router.navigate(['/rewardClaims'];
    }

    public backLink() {
        this.router.navigate(['/rewardClaims']);
    }

}
