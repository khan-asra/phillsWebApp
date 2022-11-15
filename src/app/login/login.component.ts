import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
  private userAuthService:UserAuthService,
  private router :Router) { }

  ngOnInit(): void {
	
	
  }
  errorMsg:String=""
  
  // it will take in the loginForm Details 
  // will call the userserverice login method 
  // will  set Roles and token in userAuthService
  
 // if the role in admin it will navigate to admin dashboard
 // or gallery 
 
 // for future on the client requets we can add user page - (Out of scope)
 // if the user name password is not a match we will get an error msg 
 
 
 
  login(loginForm:any){
	this.errorMsg=""
	this.userService.login(loginForm.value).subscribe(
		(response:any)=>{			
	
	this.userAuthService.setRoles(response.user.role)
	this.userAuthService.setToken(response.jwtToken)
	
	const role=response.user.role[0].roleName
	
	if(role==='Admin')
	{
		this.router.navigate(['/admin'])
	}
	else if(role=='User'){
		this.router.navigate(['/user'])
	}	
	else{
		this.router.navigate(['/gallery'])
	}
		
		
		
		},
		(error)=>{	
					
	console.log(error)	
	this.errorMsg ="You have entered an invalid username or password"	
	
		},
		
	);
	
}



}
