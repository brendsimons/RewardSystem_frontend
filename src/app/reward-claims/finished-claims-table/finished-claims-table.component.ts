import {Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { APIService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finished-claims-table',
  templateUrl: './finished-claims-table.component.html',
  styleUrls: ['./finished-claims-table.component.scss']
})
export class FinishedClaimsTableComponent implements OnInit {

    displayedColumns: string[] = ['reward', 'credits', 'userName', 'userCredits'];
    dataSource = new MatTableDataSource<ClaimElement>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private http: HttpClient, private api: APIService) { }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;

        this.http.get(this.api.getUrl('/rewardclaims')).subscribe(
            data => {
                const claimArray = <Array<any>>data;
                const changedArray = [];

                claimArray.sort(function (a, b) {
                    if (a.status > b.status) { return 1; }
                    if (a.status < b.status) { return -1; }
                    return 0;
                });

                for (let i = 1; i <= claimArray.length; i++) {
                    if (claimArray[i - 1].status[0] === 'rewarded') {
                        changedArray.push(claimArray[i - 1]);
                    }
                }

                this.dataSource = new MatTableDataSource<ClaimElement>(changedArray);
                this.dataSource.paginator = this.paginator;
            }
        );
    }
}

export interface ClaimElement {
    user: object;
    reward: object;
    status: string;
}
