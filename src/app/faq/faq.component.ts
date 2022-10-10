import { Component, OnInit } from '@angular/core';
import { Faq } from '../_model/Faq';
import { FaqService } from '../_services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private faqService:FaqService) { 
	
	

}


faqs:Faq[]=[]

getFaq(){
	this.faqService.getAllFaqs().subscribe(
			(faqs: any[]) => {
				this.faqs = faqs
				console.log("this is coming from FAQ "+this.faqs[0].question)
			},
			(error) => console.log(error)
		);
	
}

  ngOnInit(): void {
	this.getFaq()
  }

}
