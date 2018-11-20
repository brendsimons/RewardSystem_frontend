import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
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
  claims$: any;

    constructor(private http: HttpClient, private api: APIService, private router: Router) { }

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
        this.http.get(this.api.getUrl('/claims'))
            .subscribe(
                data => {
                    this.claims$ = data;
                    console.log(data);
                }
            );
    }
}
