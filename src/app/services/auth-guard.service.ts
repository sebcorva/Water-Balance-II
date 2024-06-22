import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private authService: AuthServiceService,) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (!this.authService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
