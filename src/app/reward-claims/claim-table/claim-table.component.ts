import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RewardClaim } from '../../interfaces/reward-claim';
import { RewardClaimService } from '../../services/reward-claim.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-claim-table',
    templateUrl: './claim-table.component.html',
    styleUrls: ['./claim-table.component.scss']
})
export class ClaimTableComponent implements OnInit {

    showDropdown = false;

    displayedColumns: string[] = ['reward', 'credits', 'userName', 'userCredits', 'status', 'change'];
    dataSource = new MatTableDataSource<RewardClaim>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private rewardClaimService: RewardClaimService, private router: Router) { }

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

    changeClaim(id) {
        return this.router.navigate(['/rewardClaimWijzigen/' + id]);
    }
}
