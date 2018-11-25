import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styles: []
})
export class TasksComponent implements OnInit {
    tasks$: any;

    public opdracht;
    public punten;
    public error;

    displayedColumns: string[] = ['naam', 'credits', 'bewerk', 'check'];

    constructor(private http: HttpClient, private api: APIService, public auth: AuthService,
        private router: Router) { }



    public submit() {
        this.http.post(this.api.getUrl('/tasks'), { name: this.opdracht, score: this.punten })
            .subscribe(
                result => this.router.navigate(['tasks']),
                err => this.error = 'Could not authenticate'
            );
    }

    aanpassen(taakId) {
        return this.router.navigate(['/editTasks/' + taakId]);
    }

    check(taakId) {
        return this.router.navigate(['/checkTasks/' + taakId]);
    }
    ngOnInit() {
        // CHECK OP PERMISSION "ADMIN3"
        console.log(this.auth.hasPermission('ADMIN3'));

        this.http.get(this.api.getUrl('/tasks'))
            .subscribe(
                data => {
                    this.tasks$ = data;
                    console.log(data);
                    console.log(this.tasks$[1].id);
                }
            );
    }

}
