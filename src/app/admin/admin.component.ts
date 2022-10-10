import { Component, OnInit } from '@angular/core';
import { Faq } from '../_model/Faq';
import { Product } from '../_model/product';
import { FaqService } from '../_services/faq.service';
import { ProductService } from '../_services/product.service';
import { UserService } from '../_services/user.service';






export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService:UserService, private productService:ProductService, private faqService:FaqService) { }

	outMessage:string=""
  ngOnInit() {
	this.forAdmin();
	this.getAllProducts()
	this.getFaq()
  }
  
  products:Product[]=[]


forAdmin(){
	this.userService.forAdmin().subscribe(
		(response) => {
		//	console.log(response);
			this.outMessage =response
		},
		(error)=>{
			console.log(error)
		}
	)
}
 
 selected: Date | null | undefined;

show=true
showTable(){
	this.show=true
}


hideTable(){
	this.show=false
}



getAllProducts(){
		this.productService.getGallery().subscribe(
			(products: any[]) => {
				this.products = products
			},
			(error) => console.log(error)
		);
}

/// Adding Faq display ////

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

}
