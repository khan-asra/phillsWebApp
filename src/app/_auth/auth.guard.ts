import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';

@Injectable({
	providedIn: 'root'
})
/**
What is AuthGuard?

AuthGuard is a class which implements the interface CanActivate , to decide whether the user has access/permission 
to view specific page / route / path in the application or not. 
This will be useful when we need authentication/authorization based control over the application.

 */


export class AuthGuard implements CanActivate {

	constructor(
		private userAuthService: UserAuthService,
		private router: Router,
		private userService: UserService
	) { }



	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean| UrlTree> 	| Promise<boolean | UrlTree> 	| boolean | UrlTree {
		


		if (this.userAuthService.getToken() !== null) {

		const role = route.data["roles"] as Array<string>;
		if (role) {
			const match =this.userService.roleMatch(role);
			
			if (match){
				return true;
			}else{
				this.router.navigate(['./forbidden'])
				return false;
			}
		}
		
		
	}
this.router.navigate(['/login']);
		return false;


}
}
