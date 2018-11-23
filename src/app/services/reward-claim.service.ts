import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from './api.service';
import { EMPTY, Observable } from 'rxjs';
import { catchError, share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RewardClaimService {

/*    data => {
    const claimArray = <Array<any>>data;

    claimArray.sort(function (a, b) {
        if (a.status > b.status) { return 1; }
        if (a.status < b.status) { return -1; }
        return 0;
    });

    this.changedArray = this.filterClaims(claimArray, 'unfinished');

    this.dataSource = new MatTableDataSource<ClaimElement>(this.changedArray);
    this.dataSource.paginator = this.paginator;
}
}*/

  constructor(private http: HttpClient, private api: APIService) { }

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

  filterClaims(claims, status) {

        const changedClaims = [];

        if (status === 'finished') {
            for (let i = 1; i <= claims.length; i++) {
                const claimStatus = claims[i - 1].status[0];
                if ( claimStatus === 'rewarded' || claimStatus === 'not rewarded') {
                    changedClaims.push(claims[i - 1]);
                }
            }
        } else {
            for (let i = 1; i <= claims.length; i++) {
                const claimStatus = claims[i - 1].status[0];
                if ( claimStatus === 'rewarded' || claimStatus === 'not rewarded') {
                    changedClaims.push(claims[i - 1]);
                }
            }
        }

        return changedClaims;
    }

}
