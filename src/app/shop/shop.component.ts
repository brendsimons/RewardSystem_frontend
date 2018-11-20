import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { APIService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  rewards: any;
  users: any;
  rewardsclaim: any;

  constructor(private http: HttpClient, private api: APIService,private auth: AuthService) { }

  ngOnInit() {
    // CHECK OP PERMISSION "ADMIN3"
    console.log(this.auth.hasPermission("ADMIN3"));
    
    this.http.get(this.api.getUrl("/rewards")).subscribe(
      data => {console.log(data);
        this.rewards = data;
      //  console.log(data[0].id)
      });

    this.http.get(this.api.getUrl("/users")).subscribe(
      data => {console.log(data);
        this.users = data;
      });
  }

  claim() {
    this.http.get(this.api.getUrl("/rewardclaims")).subscribe(
      data => {this.rewardsclaim = data;
        console.log(data);

     //   console.log(data[1].user.firstname);
      });
    
  }

}
