import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faq } from '../_model/Faq';
import { FaqService } from '../_services/faq.service';

@Component({
  selector: 'app-faq-details',
  templateUrl: './faq-details.component.html',
  styleUrls: ['./faq-details.component.css']
})
export class FaqDetailsComponent implements OnInit {

  constructor(private faqService:FaqService, private router:Router ) { }

faqs:Faq[]=[]

displayedColumns: string[] = [ 'id','question', 'response','edit', 'delete'];


public getFaq(){
	this.faqService.getAllFaqs().subscribe(
			(faqs: any[]) => {
				this.faqs = faqs
				console.log(this.faqs)
			},
			(error) => console.log(error)
		);
	
}






  ngOnInit( ): void {
	this.getFaq()
  }






public deleteFaq(faqId:number){
	
	//console.log(productId)
	this.faqService.deleteFaq(faqId).subscribe(
			(response) => {	
				console.log(response)
				this.getFaq()
			},
			(error:HttpErrorResponse) => console.log(error)
		);
	
	
	
}


public editFaq(faqId:number){
	console.log(faqId)
	this.router.navigate(['/addFaq', {id:faqId}])
	
}

}
