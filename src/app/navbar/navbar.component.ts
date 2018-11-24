import {ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import { MediaMatcher } from "@angular/cdk/layout";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {APIService} from "../services/api.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    isCollapsed = true;
    mobileQuery: MediaQueryList;
    @HostBinding('class.indigo-pink') lightTheme: boolean = true;
    @HostBinding('class.indigo-pink-dark') darkTheme: boolean = false;
    theme: string = 'Donker';

    private _mobileQueryListener: () => void;
    constructor(private http: HttpClient, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private api: APIService, private auth: AuthService, private router: Router) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    toggleTheme(): void {

        if (this.theme === 'Donker') {
            this.lightTheme = false;
            this.darkTheme = true;
            this.theme = 'Licht';
        } else {
            this.darkTheme = false;
            this.lightTheme = true;
            this.theme = 'Donker';
        }
    }

    ngOnInit() {
    }

    logout() {
        this.auth.logout();
        this.router.navigate(['login'])
    }

}