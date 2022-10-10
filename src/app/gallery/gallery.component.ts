import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../_model/product';
import { ImageProcessingService } from '../_services/image-processing.service';
import { ProductService } from '../_services/product.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']

})
export class GalleryComponent implements OnInit {

  constructor(private productService:ProductService, private imageProcessService:ImageProcessingService) { }
  
  products:Product[]=[]

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

}
