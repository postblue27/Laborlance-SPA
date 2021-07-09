import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RenterGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) {}
  canActivate(): boolean {
    if(this.authService.getDecodedToken().role === 'Renter') {
      return true;
    }
    return false;
  }
  
}
