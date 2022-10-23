import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FaqService } from '../_services/faq.service';
import { PotentialCustomer } from '../_model/PotentialCustomer';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private faqService:FaqService) { }




  ngOnInit(): void {}
  	potentialCustomer: PotentialCustomer = {
		firstName: "",
		lastName: "",
		email: "",
		message: "",
		subject: "",
	}
	result: string = ""






	sendMail(potentialCustomer: PotentialCustomer) {



		this.faqService.sendEmail(potentialCustomer).subscribe(
			(response) => {
				console.log(response)
				this.clearFields()

			},
			(error: HttpErrorResponse) => {
				console.log(error)
			}
		)
	}

	clearFields() {
		this.potentialCustomer.firstName = ""
		this.potentialCustomer.lastName = ""
		this.potentialCustomer.email = ""
		this.potentialCustomer.message = ""
		this.potentialCustomer.subject = ""
	}







/** 
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
*/


}
