import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { TaskClaim } from '../../interfaces/task-claim';
import { TaskClaimService } from '../../services/task-claim.service';

@Component({
    selector: 'app-finished-claims-table',
    templateUrl: './finished-claims-table.component.html',
    styleUrls: ['./finished-claims-table.component.scss']
})
export class FinishedClaimsTableComponent implements OnInit {

    displayedColumns: string[] = ['task', 'credits', 'userName', 'userCredits', 'status'];
    dataSource = new MatTableDataSource<TaskClaim>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private taskClaimService: TaskClaimService) { }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.getClaims();
    }

    getClaims() {
        this.taskClaimService.getClaims().subscribe(
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
                    if (status === 'Afgewerkt' || status === 'Niet toegekend') {
                        changedArray.push(claimArray[i - 1]);
                    }
                }

                this.dataSource = new MatTableDataSource<TaskClaim>(changedArray);
                this.dataSource.paginator = this.paginator;
            }
        );
    }
}
