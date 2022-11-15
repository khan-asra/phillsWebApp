import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../_model/product';
import { PotentialCustomer } from '../_model/PotentialCustomer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


 //headers:HttpHeaders = new HttpHeaders({'Content-Type': 'Access-Control-Allow-Origin’'}); 
 



headers = new HttpHeaders().set('Access-Control-Allow-Origin',"http://localhost:9090/");
  constructor(private httpClient:HttpClient) { }
  
  
 /*  
 headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
}

requestOptions = {                                                                                                                                                                                 
  headers: new Headers(this.headerDict), 
};
*/
 
 
 
 
  
  public addProduct(product:FormData){
	return this.httpClient.post<Product>("http://localhost:9090/addEditProduct",product);	
}


public getGallery(){
	return this.httpClient.get<Product[]>("http://localhost:9090/getGallery" ,{headers:this.headers});
}


public deleteProduct(productId:number){
	return this.httpClient.delete("http://localhost:9090/deleteProduct/" +productId);
}

public getAllProducts(){
	return this.httpClient.get<Product[]>("http://localhost:9090/getAllProducts");
}

public getProductById(productId:number){
	return this.httpClient.get<Product>("http://localhost:9090/getProductById/"+productId);
}


// addding PotentialCustomer 

  public getPotentialCust(){
	return this.httpClient.get<PotentialCustomer[]>("http://localhost:9090/getPotentialCustomers" );
}
}
