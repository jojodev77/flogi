/* import natif angular */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

/* Service */
import { UserService } from './user.service';

/* rxJS */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(
    private router: Router,
    private userService: UserService) { }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.userService.accesRoot) {
        return true;
      } else {
        this.router.navigate(['/home']);
      }
    }
  }