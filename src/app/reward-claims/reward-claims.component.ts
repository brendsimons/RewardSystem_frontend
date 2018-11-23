import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './reward-claims.component.html',
  styleUrls: ['./reward-claims.component.scss']
})
export class RewardClaimsComponent implements OnInit {
    hideFinishedClaims = true;
    hidePendingClaims = false;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    buttonClick() {
        this.router.navigate(['/rewardIngeven']);
    };

    claimRouteClick() {
        this.hidePendingClaims = true;
        this.hideFinishedClaims = false;
    }
}