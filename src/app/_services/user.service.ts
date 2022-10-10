import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  PATH_OF_API ="http://localhost:9090";
  requestHeader = new HttpHeaders(
	{
		"No-Auth":"True"
	}
);
  
  public forUser(){
	return this.httpClient.get(this.PATH_OF_API +'/forUser',{responseType:"text"});
}


  public forAdmin(){
	return this.httpClient.get(this.PATH_OF_API +'/forAdmin',{responseType:"text"});
}
  
  constructor(private  httpClient:HttpClient,
  private userAuthService:UserAuthService ) { }
  
  
  
  // this is called from the login.ts file
  // It will check the functionality for JwtController
  //that will return the response 
  
  public login(loginData:any){
	console.log(loginData )
	return this.httpClient.post(this.PATH_OF_API +"/authenticate", 
	loginData,{headers:this.requestHeader});
	
}

public guestLogin(loginData:any){
		loginData.userName="none" 
	    loginData.userPassword="none"
	    return loginData
}

// check the roles for the header 


public roleMatch(allowedRoles:any):boolean{
	
	let isMatch = false
	const userRoles : any = this.userAuthService.getRoles()
	
	
	if(userRoles != null && userRoles)
	{
		for (let i=0; i <userRoles.length;i++){
			
			
			for (let j=0; j <allowedRoles.length;j++){
				
				if(userRoles[i].roleName === allowedRoles[j]){
					isMatch = true;
					return isMatch
				}
				else {
					return isMatch;
				}
				
			
		}
		}
		
	}
	return false
}
}
