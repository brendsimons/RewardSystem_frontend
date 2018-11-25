import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-check-tasks',
  templateUrl: './check-tasks.component.html',
  styleUrls: ['./check-tasks.component.scss'],
})
export class CheckTasksComponent implements OnInit {
    public task;
    public message;
    public error;

    taakId = null;
    taak: any;

    constructor(private http: HttpClient, private api: APIService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.taakId = params.id;
        });
    }

    public submit() {
        this.http.post(this.api.getUrl('/taskclaims'), {task: this.taakId, message: this.message})
            .subscribe(
                result => this.router.navigate(['tasks']),
                err => this.error = 'Could not authenticate'
            );
    }

    public backLink() {
        return this.router.navigate(['/tasks']);
    }

}
