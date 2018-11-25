import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskClaimService } from '../../services/task-claim.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APIService } from '../../services/api.service';

export interface Status {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-changestatus',
    templateUrl: './task-changestatus.component.html',
    styleUrls: ['./task-changestatus.component.scss']
})
export class TaskChangestatusComponent implements OnInit {
    selectedValue: string;
    claimId;
    claim: any;

    constructor(private router: Router, private route: ActivatedRoute, private taskClaimService: TaskClaimService, private http: HttpClient, private api: APIService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.claimId = params.id;
        });

        this.taskClaimService.getClaim(this.claimId).subscribe(
            result => this.claim = result,
            err => console.log('Could not authenticate')
        );

        console.log(this.claim);
    }

    public submit() {
        this.taskClaimService.updateClaimStatus(this.claimId, this.selectedValue).subscribe(
            claimupdate => {
                if (this.selectedValue === "Afgewerkt") {
                    this.http.put(this.api.getUrl("/users/" + this.claim.user.id), { credits: this.claim.user.credits + this.claim.task.score, score: this.claim.user.score + this.claim.task.score }).subscribe(
                        result => {
                            this.router.navigate(['/taskClaims']);
                        },
                        err => console.log('Could not authenticate')
                    );
                } else {
                    this.router.navigate(['/taskClaims']);
                }
            },
            err => console.log('Could not authenticate')
        );
    }

    public backLink() {
        this.router.navigate(['/taskClaims']);
    }

}
