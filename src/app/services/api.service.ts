import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    constructor(private http: HttpClient) { }

    public getBaseUrl() {
        return "https://vpn.brendsimons.be";
    }

    public getUrl(path) {
        return this.getBaseUrl() + path;
    }
}