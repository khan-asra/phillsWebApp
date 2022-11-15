import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/product';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,private router:Router, ) { }

imageSelected=0

product:Product ={
	productId :0,
	
	productName: "",
    price : 0,
    description: "",
    productImages:[]
    }

  ngOnInit(): void {
	
		this.product= this.activatedRoute.snapshot.data['product']
		console.log(this.product)
		
	
  }

imagesChange(index:number){
	this.imageSelected=index;
}


sendEmailWithProdDetails(productId:Number){
	
	this.router.navigate(['/contactMe', {productId:productId}])
}

}
