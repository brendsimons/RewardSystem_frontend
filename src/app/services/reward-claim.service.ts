import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from './api.service';
import { EMPTY } from 'rxjs';
import { catchError, share, tap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RewardClaimService {

  constructor(private http: HttpClient, private api: APIService, private router: Router) { }

  getClaims() {
      return this.http.get(this.api.getUrl('/rewardclaims'))
          .pipe(
              tap(req => console.log('get-request', req)),
              catchError(
                  (error) => {
                      console.log(error);
                      return EMPTY;
                  }),
              share()
          );
  }

  updateClaimStatus(claimId, status) {
      return this.http.put(this.api.getUrl('/rewardclaims/' + claimId), { status: status }).subscribe(
          result => console.log('succes'),
          err =>  console.log('Could not authenticate')
      );
  }

  getClaim(id) {
      return this.http.get(this.api.getUrl('/rewardclaims/' + id))
          .pipe(
              tap(req => console.log('get-request', req)),
              catchError(
                  (error) => {
                      console.log(error);
                      return EMPTY;
                  }),
              share()
          );
  }
}
