import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RewardClaim } from '../../interfaces/reward-claim';
import { RewardClaimService } from '../../services/reward-claim.service';

@Component({
    selector: 'app-finished-claims-table',
    templateUrl: './finished-claims-table.component.html',
    styleUrls: ['./finished-claims-table.component.scss']
})
export class FinishedClaimsTableComponent implements OnInit {

    displayedColumns: string[] = ['reward', 'credits', 'userName', 'userCredits', 'status'];
    dataSource = new MatTableDataSource<RewardClaim>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private rewardClaimService: RewardClaimService) { }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.getClaims();
    }

    getClaims() {
        this.rewardClaimService.getClaims().subscribe(
            data => {
                const claimArray = <Array<any>>data;
                const changedArray = [];

                claimArray.sort(function (a, b) {
                    if (a.status > b.status) { return 1; }
                    if (a.status < b.status) { return -1; }
                    return 0;
                });

                for (let i = 1; i <= claimArray.length; i++) {
                    const status = claimArray[i - 1].status[0];
                    if (status !== 'Afgewerkt' && status !== 'Niet toegekend') {
                        changedArray.push(claimArray[i - 1]);
                    }
                }

                this.dataSource = new MatTableDataSource<RewardClaim>(changedArray);
                this.dataSource.paginator = this.paginator;
            }
        );
    }
}
