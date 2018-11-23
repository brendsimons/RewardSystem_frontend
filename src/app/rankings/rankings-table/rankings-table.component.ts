import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { APIService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-rankings-table',
    templateUrl: './rankings-table.component.html',
    styleUrls: ['./rankings-table.component.scss']
})
export class RankingsTableComponent implements OnInit {

    displayedColumns: string[] = ['ranking', 'score', 'name'];
    dataSource = new MatTableDataSource<UserElement>();

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private http: HttpClient, private api: APIService) { }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;

        this.http.get(this.api.getUrl('/users')).subscribe(
            data => {
                const userArray = <Array<any>>data;

                userArray.sort(function (a, b) {
                    return b.score - a.score;
                });

                for (let i = 1; i <= userArray.length; i++) {
                    userArray[i - 1].position = i;
                }

                this.dataSource = new MatTableDataSource<UserElement>(userArray);
                this.dataSource.paginator = this.paginator;
            }
        );
    }
}

export interface UserElement {
    firstName: string;
    lastName: string;
    score: number;
    position: number;
}