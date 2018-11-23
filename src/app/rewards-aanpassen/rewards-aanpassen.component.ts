import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../services/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-rewards-aanpassen',
  templateUrl: './rewards-aanpassen.component.html',
  styleUrls: ['./rewards-aanpassen.component.scss'],
})
export class RewardsAanpassenComponent implements OnInit {
  public name;
  public score;
  public image;
  public error;

  rewardId = null;
  reward: any;

  constructor(private http: HttpClient, private api: APIService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rewardId = params.id;
    })

    this.http.get(this.api.getUrl("/rewards/" + this.rewardId)).subscribe(
      data => {
        const reward = < RewardElement > data;
        this.name = reward.name;
        this.score = reward.score;
        this.image = reward.image;
      });
  }

  public submit() {
    this.http.put(this.api.getUrl('/rewards/' + this.rewardId), { name: this.name, score: this.score, image: this.image })
        .subscribe(
            result => this.router.navigate(['shop']),
            err => this.error = 'Could not authenticate'
        );
        
  }  

  public verwijder() {
    this.http.delete(this.api.getUrl('/rewards/' + this.rewardId))
        .subscribe(
            result => this.router.navigate(['shop']),
            err => this.error = 'Could not authenticate'
        );
        
  }  

  public backLink() {
      return this.router.navigate(['/shop']);
  }

}

export interface RewardElement {
  name: string;
  score: number;
  image: string;
}