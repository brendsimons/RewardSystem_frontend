import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { APIService } from '../services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-rewards-ingeven',
    templateUrl: './rewards-ingeven.component.html',
    styleUrls: [
        './rewards-ingeven.component.scss'
    ]
})
export class RewardsIngevenComponent implements OnInit {
    public name;
    public score;
    public error;

    constructor(private http: HttpClient, private api: APIService, private router: Router) { }

    public submit() {
        this.http.post(this.api.getUrl('/rewards'), { name: this.name, score: this.score })
            .subscribe(
                result => this.router.navigate(['shop']),
                err => this.error = 'Could not authenticate'
            );
    }

    public backLink() {
        return this.router.navigate(['/rewards']);
    }

    ngOnInit() {
    }

}
