import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-rankings',
    templateUrl: './rankings.component.html',
    styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent {
    constructor(private http: HttpClient, private api: APIService, private auth: AuthService, private router: Router) { }

    reset() {
        this.http.get(this.api.getUrl('/users/resetscores')).subscribe(
            data => window.location.reload()
        );
    }
}