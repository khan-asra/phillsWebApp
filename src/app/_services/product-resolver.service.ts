import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Product } from '../_model/product';
import { ImageProcessingService } from './image-processing.service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<Product> {

  constructor(private productService:ProductService, private imageProceesingService:ImageProcessingService) { }
  
  
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Product> {
		 const id = route.paramMap.get("productId")
		 
		 if(id){
			// if id is not null then we fetch details from observable 
		return this.productService.getProductById(Number(id)).pipe(
			//map with takes the product and will change the image value 
			map((product => this.imageProceesingService.createImage(product))		
			)
			
			
			
		)
			
		}
		else{
			//of is from rxjs
			return of(this.getProduct())
		}
		 
	}
	
	
	public getProduct(){
		//return Empty object of product 
		return{
			productId:0,
			productName: "",
   			price : 0,
    		description: "",
    		productImages:[]
    
		}
	}
}
