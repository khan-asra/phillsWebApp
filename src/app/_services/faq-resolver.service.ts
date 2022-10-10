import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Faq } from '../_model/Faq';
import { FaqService } from './faq.service';

@Injectable({
  providedIn: 'root'
})
export class FaqResolverService  implements Resolve<Faq> {

  constructor(private faqService:FaqService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Faq | Observable<Faq> | Promise<Faq> {
          const id= route.paramMap.get("id")
         
         if(id){
			// if id is not null then we fetch details from observable 
		return this.faqService.getFaqById(Number(id))
			
		}
		else{
			//of is from rxjs
			return this.getFaq()
		}
		 
    }
    
    
    public getFaq(){
		//return Empty object of product 
		return{
			question: "",
   			
    		response: "",
    		
    
		}
	}
}
