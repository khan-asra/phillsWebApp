import { HttpHandler, HttpEvent, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { UserAuthService } from "../_services/user-auth.service";
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

	constructor(private userAuthService: UserAuthService ,private router: Router) { }
	private root: string = ""
	private request: HttpHeaders | undefined

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



		this.root = 'http://localhost:9090';
		this.request = new HttpHeaders({
			'Access-Control-Allow-Origin': 'http://localhost:4200'
		});

		if (req.headers.get('No-Auth') === 'True') {
			return next.handle(req.clone());
			
		}
		
		const token = this.userAuthService.getToken();
		if (token!=null){


		req = this.addToken(req, token as string);
			}
		return next.handle(req).pipe(

			/** commented  this on sept15 -- checking cors  */


			catchError(
				(err: HttpErrorResponse) => {
					console.log(err.status);
					if (err.status == 401) {
						this.router.navigate(['/login'])
					}
					else if (err.status === 403) {
						this.router.navigate(['/forbidden'])
					}
					return throwError("Some thing is wrong");
				}

			)

		);
	}




	private addToken(request: HttpRequest<any>, token: string) {

console.log("inside this function   " +token)
		/** added this on sept15 -- checking cors  */
		this.root = 'http://localhost:9090';
		this.request = new HttpHeaders({
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'Access-Control-Allow-Origin': 'http://localhost:9090'
		});

		return request.clone(
			{
				setHeaders: {
					Authorization: `Bearer ${token}`
				}
			}
		);
	}

}