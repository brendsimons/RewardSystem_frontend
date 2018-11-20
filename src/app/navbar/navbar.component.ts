import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;
    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private auth: AuthService, private router: Router) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit() {
    }

    logout() {
        this.auth.logout();
        this.router.navigate(['login'])
    }

}