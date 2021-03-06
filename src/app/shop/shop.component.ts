import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { APIService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';

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

  userId: any;
  rewardsclaim: any;
  public error;
  public scoreReward;
  public scoreUser;

  constructor(private http: HttpClient, private api: APIService, public auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.http.get(this.api.getUrl('/rewards')).subscribe(
      data => {
        this.rewards = data;
      });

    this.http.get(this.api.getUrl("/users/current")).subscribe(
      data => {
        this.user = data;

        this.scoreUser = this.user.credits;
        this.userId = this.user.id
      });

    this.http.get(this.api.getUrl("/rewardclaims")).subscribe(
      data => {
        this.rewardsclaim = data;
      });
  }

  claim(rewardId) {
    this.http.get(this.api.getUrl("/rewards/" + rewardId)).subscribe(
      data => {
        this.reward = data;

        this.scoreReward = this.reward.score;

        if (this.scoreUser >= this.scoreReward) {
          this.http.put(this.api.getUrl("/users/" + this.userId), { credits: this.scoreUser - this.scoreReward }).subscribe(
            result => {
              this.scoreUser = this.scoreUser - this.scoreReward;
              console.log("succes", this.scoreUser)
            },
            err => this.error = 'Could not authenticate'
          );

          this.http.post(this.api.getUrl("/rewardclaims"), { reward: rewardId }).subscribe(
            result => {
              console.log("succesvol een rewardclaim toegevoegd", rewardId)
            },
            err => this.error = 'Could not authenticate'
          );
        }
      });
  }

  aanpassen(rewardId) {
    return this.router.navigate(['/rewardAanpassen/' + rewardId]);
  }

  rewardToevoegen() {
    return this.router.navigate(['/rewardIngeven']);
  }
}
