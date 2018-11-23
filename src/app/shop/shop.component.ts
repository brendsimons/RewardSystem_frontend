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
  reward: any;
  users: any;
  user: any;
  rewardId: any;
  
  public error;
  public scoreReward;
  public scoreUser;

  

  constructor(private http: HttpClient, private api: APIService,private auth: AuthService) { }

  ngOnInit() {
    // CHECK OP PERMISSION "ADMIN3"
    console.log(this.auth.hasPermission('ADMIN3'));

    this.http.get(this.api.getUrl('/rewardClaims')).subscribe(
      data => {console.log(data);
        this.rewards = data;
      //  console.log(data[0].id)
      
      });

    this.http.get(this.api.getUrl('/users')).subscribe(
      data => {console.log(data);
        this.users = data;
      });
  }

  claim(rewardId) {
    this.http.get(this.api.getUrl("/rewards/" + rewardId)).subscribe(
      data => {this.reward = data;
        console.log(this.reward);

        this.scoreReward = this.reward.score;
      });

    this.http.get(this.api.getUrl("/users/current")).subscribe(
      data => {this.user = data;
        console.log(this.user);

        this.scoreUser = this.user.score;
        this.user.id
      });

     this.http.put(this.api.getUrl("/users/" + this.user.Id), {scoreUser: this.scoreUser - 1}).subscribe(
       result => console.log("succes"),
       err => this.error = 'Could not authenticate'
     );


    // this.http.get(this.api.getUrl("/rewardclaims/{claimId}")).subscribe(
    //   data => {this.rewardsclaim = data;
    //     console.log(data);

    //     this.scoreUser = data[1].user.score;
    //     this.scoreReward = data[1].reward.score;

    //     console.log(this.scoreUser);
    //     console.log(this.scoreReward);

    //     if(this.scoreUser > this.scoreReward){
    //       console.log(data[1].user.score - data[1].reward.score);
    //     }else{
    //       console.log("ni genoeg punte yo");
    //     }
        
    //   });
  }

}
