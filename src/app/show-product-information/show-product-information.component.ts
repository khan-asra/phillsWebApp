import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../_model/product';
import { ProductService } from '../_services/product.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShowProductImagesComponent } from '../show-product-images/show-product-images.component';
import { ImageProcessingService } from '../_services/image-processing.service';
import { map } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-product-information',
  templateUrl: './show-product-information.component.html',
  styleUrls: ['./show-product-information.component.css']
})
export class ShowProductInformationComponent implements OnInit {

  constructor( private imageProcessService:ImageProcessingService,
   private productService:ProductService, 
   public imageDialog: MatDialog,
   private router:Router ) { }

  ngOnInit() {
	this.getAllProducts()
	
  }


displayedColumns: string[] = [ 'productId','productName', 'price', 'productImages','edit', 'delete'];

products:Product[]=[]

public getAllProducts(){
	this.productService.getAllProducts()
	//the first map will take the entire array of Product 
	// the second map will  take the only single element that is present in an array 
	
	.pipe(
		map((x:Product[],i )=>x.map((product:Product)=>this.imageProcessService.createImage(product))))
	.subscribe(
			(products: any[]) => {
				this.products = products
			//	console.log(this.products)
			},
			(error) => console.log(error)
		);
}


public deleteProduct(productId:number){
	
	//console.log(productId)
	this.productService.deleteProduct(productId).subscribe(
			(response) => {
				
				console.log(response)
				this.getAllProducts()
			},
			(error:HttpErrorResponse) => console.log(error)
		);
	
	
	
}



public showImages(product:Product){
	console.log(product)
	
	this.imageDialog.open(ShowProductImagesComponent,{
		data:{
			images:product.productImages
		},
		
		height:'300px',
		width:'500px'
	});
}



public editProduct(productid:number){
	//console.log(productid)
	this.router.navigate(['/addNewProduct', {productId:productid}])
	
}
}
