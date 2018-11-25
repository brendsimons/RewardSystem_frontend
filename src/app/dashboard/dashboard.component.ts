import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { Observable } from "rxjs";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.scss'
    ]
})
export class DashboardComponent implements OnInit {
    myTaskClaims$: any;
    myRewardClaims$: any;
    currentUser: any;

    constructor(private http: HttpClient, private api: APIService, private router: Router, private auth: AuthService) { }

    ngOnInit() {
        this.http.get(this.api.getUrl('/taskclaims/myown'))
            .subscribe(
                data => {
                    this.myTaskClaims$ = data;
                }
            );
        this.http.get(this.api.getUrl('/rewardclaims/myown'))
            .subscribe(
                data => {
                    this.myRewardClaims$ = data;
                }
            );
        this.http.get(this.api.getUrl('/users/current'))
            .subscribe(
                data => {
                    this.currentUser = data;
                }
            );
    }
}
