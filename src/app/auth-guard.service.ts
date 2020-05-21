import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) {
          return authenticated;
        } else {
          this.router.navigate(['/']);
        }
      }
    );

    return undefined;
  }
}
