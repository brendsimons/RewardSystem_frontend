import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import {Observable} from "rxjs";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.scss'
    ]
})
export class DashboardComponent implements OnInit {
    rewards$: any;
    tasks$: any;
    taskclaims$: any;
    rewardclaims$: any;
    currentUser: any;

    constructor(private http: HttpClient, private api: APIService, private router: Router, public auth: AuthService) { }

    ngOnInit() {
        this.http.get(this.api.getUrl('/rewards'))
            .subscribe(
                data => {
                    this.rewards$ = data;
                    console.log(data);
                }
            );
        this.http.get(this.api.getUrl('/tasks'))
            .subscribe(
                data => {
                    this.tasks$ = data;
                    console.log(data);
                }
            );
        this.http.get(this.api.getUrl('/taskclaims'))
            .subscribe(
                data => {
                    this.taskclaims$ = data;
                    console.log(data);
                }
            );
        this.http.get(this.api.getUrl('/rewardclaims'))
            .subscribe(
                data => {
                    this.rewardclaims$ = data;
                    console.log(data);
                }
            );
        this.http.get(this.api.getUrl('/users/current'))
            .subscribe(
                data => {
                    this.currentUser = data;
                    console.log(data);
                }
            );
    }
}
