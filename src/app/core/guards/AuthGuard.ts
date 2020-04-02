import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuardAdmin implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = JSON.parse(sessionStorage.getItem(GeneralEnum.CurrentUser));
    if (currentUser) {
      const tokenInfo = jwt_decode(JSON.stringify(currentUser.jwtToken)); // decode token
      const preferredRole = tokenInfo['cognito:preferred_role'];
      return (preferredRole.indexOf('esp_admin') > -1 || preferredRole.indexOf('esp-cognito-admin-role') > -1);
    } else {
      return null;
    }
  }

}
