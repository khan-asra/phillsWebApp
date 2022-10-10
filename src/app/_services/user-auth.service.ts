import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  
    public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
  return JSON.parse(localStorage.getItem('roles') as string);
  }



  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken() {
    return localStorage.getItem('jwtToken');
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }

public isAdmin(){
	const roles:any[]=this.getRoles();
	const admin='Admin'
	//console.log( "ROLE "+roles[0].roleName)
//	console.log(  roles[0].roleName === admin)
	   if( roles[0].roleName === admin)
	   {
		return true;
	}
	else return false
	   
}



public isUser(){
	const roles:any[]=this.getRoles();
	console.log(roles)
	return roles[0].roleName === 'User'
}

}