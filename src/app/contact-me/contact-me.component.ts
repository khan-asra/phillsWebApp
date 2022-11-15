import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FaqService } from '../_services/faq.service';
import { PotentialCustomer } from '../_model/PotentialCustomer';
import { Product } from '../_model/product';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private faqService:FaqService,private activatedRoute: ActivatedRoute) { }

product:Product ={
	productId :0,
	
	productName: "",
    price : 0,
    description: "",
    productImages:[]
    }
    


  ngOnInit(): void {
	this.product = this.activatedRoute.snapshot.data['product']
	//this will check the id
	if(this.product.productId > 0){
		this.potentialCustomer.message= "Hello,\nI am interested in one of your shoe design and would like to know more it. "+ "Product Details are:\n"
		+"Name: "+ this.product.productName + 
		"\n Product ID: " +this.product.productId + 
		"\n Product Description: " +this.product.description +
		"\nThank you."
		
		
		}
		
		


}
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
