import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Faq } from '../_model/Faq';
import { FaqService } from '../_services/faq.service';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.css']
})
export class AddFaqComponent implements OnInit {

  constructor(private faqService:FaqService, private activatedRoute: ActivatedRoute) { }


faq:Faq={
	question:"",
	response:""
}
  ngOnInit() {
	
		this.faq= this.activatedRoute.snapshot.data['faq']
  }

addFaq(faq:Faq){
	this.faqService.addFaq(faq).subscribe(
		(response:Faq)=> {
			console.log(response)
			this.clearFields()
	},
		(error: HttpErrorResponse)=> {
			console.log(error)
		}
		
	)
}

clearFields(){
	this.faq.question=""
	this.faq.response=""
}

}
