import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class WorkerGuard implements CanActivate {
    constructor(
      private authService: AuthService,
      private router: Router) {}
    canActivate(): boolean {
      if(this.authService.getDecodedToken().role === 'Worker') {
        return true;
      }
      return false;
    }
    
  }
  