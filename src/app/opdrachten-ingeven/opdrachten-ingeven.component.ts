import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APIService} from '../services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-opdrachten-ingeven',
  templateUrl: './opdrachten-ingeven.component.html',
  styles: []
})
export class OpdrachtenIngevenComponent implements OnInit {
    tasks$: any;

    displayedColumns: string[] = ['naam', 'credits' ];

  constructor(private http: HttpClient, private api: APIService, private auth: AuthService) { }

  ngOnInit() {
      // CHECK OP PERMISSION "ADMIN3"
      console.log(this.auth.hasPermission('ADMIN3'));

      this.http.get(this.api.getUrl('/tasks'))
          .subscribe(
              data => {
                  this.tasks$ = data;
                  console.log(data);
                  console.log(this.tasks$[1].name);
              }
          );
  }

}
