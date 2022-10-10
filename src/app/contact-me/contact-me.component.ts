import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FaqService } from '../_services/faq.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private faqService:FaqService) { }




  ngOnInit(): void {
  }
  
  firstName=""
  lastName=""
  email=""
  message=""
  subject=""

   result:string=""

sendMail(firstName:string, lastName:string, email:string,message:string){
	
	
	console.log(firstName)


	this.faqService.sendEmail(firstName, lastName, email,message,this.subject).subscribe(
		(response)=> {
			console.log(response)
			
	},
		(error: HttpErrorResponse)=> {
			console.log(error)
		}
		
	)
}


}
