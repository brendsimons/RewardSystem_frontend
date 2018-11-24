import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {RewardClaim} from '../../interfaces/reward-claim';
import {RewardClaimService} from '../../services/reward-claim.service';

@Component({
  selector: 'app-finished-claims-table',
  templateUrl: './finished-claims-table.component.html',
  styleUrls: ['./finished-claims-table.component.scss']
})
export class FinishedClaimsTableComponent implements OnInit {

    displayedColumns: string[] = ['reward', 'credits', 'userName', 'userCredits', 'status'];
    dataSource = new MatTableDataSource<RewardClaim>();

    @Input() claims$: any;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private rewardClaimService: RewardClaimService) {}

    ngOnInit() {
        this.rewardClaimService.getClaims().subscribe( data => {

            this.claims$ = this.rewardClaimService.filterClaims(this.claims$, status);

            this.dataSource = new MatTableDataSource<RewardClaim>(this.claims$);
            this.dataSource.paginator = this.paginator;
        });
    }
}
