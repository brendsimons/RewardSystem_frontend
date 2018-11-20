import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { APIService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  data: any = {};

  constructor(private http: HttpClient, private api: APIService,private auth: AuthService) { }

  ngOnInit() {
    // CHECK OP PERMISSION "ADMIN3"
    console.log(this.auth.hasPermission("ADMIN3"));
  }

//  getData(){
 //   return this.http.get(this.api.getUrl("/rewards/")map(result => {console.log(data)});
//  }


}
