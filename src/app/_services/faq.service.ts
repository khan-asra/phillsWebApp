import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faq } from '../_model/Faq';
import { PotentialCustomer } from '../_model/PotentialCustomer';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

constructor(private httpClient:HttpClient) { }

headers = new HttpHeaders().set('Access-Control-Allow-Origin',"http://localhost:9090/");

public addFaq(faq:Faq){
		return this.httpClient.post<Faq>("http://localhost:9090/addEditFaq",faq);
}

public deleteFaq(id:number){
	return this.httpClient.delete("http://localhost:9090/deleteFaq/" +id);
}


public getFaqById(id:number){
	return this.httpClient.get<Faq>("http://localhost:9090/getFaqById/"+id);
}

public getAllFaqs(){
	return this.httpClient.get<Faq[]>("http://localhost:9090/getAllFaq",{headers:this.headers});
}


/** 
public sendEmail(firstName:string, lastName:string, email:string,message:string,subject:string){
	console.log("checking")
		return this.httpClient.post<string>("http://localhost:9090/submitContactEmail/",+firstName/+lastName/+email/+subject/+message );
}
*/

public sendEmail(potientialCust:PotentialCustomer){

	console.log("checking")
		return this.httpClient.post<PotentialCustomer>("http://localhost:9090/sendMail",potientialCust);

}




}
