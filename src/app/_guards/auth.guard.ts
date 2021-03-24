import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) {}
  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }
  
    this.toastr.error("You need to sign in to get here");
    this.router.navigate(['/auth']);
    return false;
  }
  
}
