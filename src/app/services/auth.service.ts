import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<boolean> {
        return this.http.post<{ token: string }>('https://vpn.brendsimons.be/users/login', { email: email, password: password })
            .pipe(
                map(result => {
                    localStorage.setItem('access_token', result.token);
                    return true;
                })
            );
    }

    logout() {
        localStorage.removeItem('access_token');
    }

    public loggedIn(): boolean {
        return (localStorage.getItem('access_token') !== null);
    }

    public getJWTToken() {
        return localStorage.getItem('access_token');
    }

    public hasPermission(permission: string): boolean {
        if (!this.loggedIn()) {
            return false;
        }

        const jwthelper = new JwtHelperService();
        const permissions = jwthelper.decodeToken(this.getJWTToken()).permissions;

        return permissions.includes(permission);
    }
}