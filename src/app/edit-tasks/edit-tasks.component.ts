import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.scss'],
})
export class EditTasksComponent implements OnInit {
  public name;
  public score;
  public error;

  taakId = null;
  taak: any;

  constructor(private http: HttpClient, private api: APIService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.taakId = params.id;
    })

    this.http.get(this.api.getUrl('/tasks/' + this.taakId)).subscribe(
      data => {
        const taak = < TaakElement > data;
        this.name = taak.name;
        this.score = taak.score;
      });
  }

  public submit() {
    this.http.put(this.api.getUrl('/tasks/' + this.taakId), { name: this.name, score: this.score })
        .subscribe(
            result => this.router.navigate(['tasks']),
            err => this.error = 'Could not authenticate'
        );

  }

  public verwijder() {
    this.http.delete(this.api.getUrl('/tasks/' + this.taakId))
        .subscribe(
            result => this.router.navigate(['tasks']),
            err => this.error = 'Could not authenticate'
        );

  }

  public backLink() {
      return this.router.navigate(['/tasks']);
  }

}

export interface TaakElement {
  name: string;
  score: number;
}
