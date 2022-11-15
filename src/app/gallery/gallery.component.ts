import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from '../_model/product';
import { ImageProcessingService } from '../_services/image-processing.service';
import { ProductService } from '../_services/product.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ShowProductImagesComponent } from '../show-product-images/show-product-images.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']


})
export class GalleryComponent implements OnInit {

  constructor(private productService:ProductService, private imageProcessService:ImageProcessingService, private router:Router,
    public imageDialog: MatDialog) { }
  
  products:Product[]=[]
  
    flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }


  ngOnInit(): void {
	
	this.getAllProducts();
	
  }
  
 
  
 index:number=0
  
public getAllProducts(){
	this.productService.getGallery()
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


/*
public viewProduct(product:Product){
	console.log("Commimg from the gallery ",product)
	
	this.router.navigate(['displayProduct', {Product:product}])
	
	
}
**/


displayProduct(productId:Number){
	//	console.log("Commimg from the gallery ",product)
	
	this.router.navigate(['displayProduct', {productId:productId}])
	
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

viewProduct(productId:number){
	
		this.router.navigate(['/displayProduct', {productId:productId}])
}

}
