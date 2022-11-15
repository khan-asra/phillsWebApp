import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,ReactiveFormsModule  } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FileHandler } from '../_model/modelHandler';
import { Product } from '../_model/product';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {


product:Product ={
	productId:0,
	productName: "",
    price : 0,
    description: "",
    productImages:[]
   
}
productForm: FormGroup | any;


addProduct(productForm:NgForm){
	
	
	const productFormData= this.FormDataPrepared(this.product)
	console.log(this.product)
	this.productService.addProduct(productFormData).subscribe(
		(response:Product)=> {
			console.log(response)
			this.clearAllFields()
			
		},
		(error: HttpErrorResponse)=> {
			console.log(error)
		}
		
	);
	
	
}
/**testing this method to convert product to formData
if it works-- I will take a break else -- > I will take a break  */

/**Blob will be used to convert json into a package */
FormDataPrepared(product:Product):FormData{
	const formData= new FormData();
	
	formData.append(
		'product',
		new Blob ([JSON.stringify(product)], {type:'application/json'})
	);
	for(var i =0; i <product.productImages.length;i++){
		formData.append(
			'imageFile',
			product.productImages[i].file,
			product.productImages[i].file.name
		);
	}

	
	return formData
}

   


onFileSelected(event:any){
	if(event.target.files){
		const file = event.target.files[0];
		
		const fileHandle: FileHandler= {
			file:file,
			url :this.sanitizer.bypassSecurityTrustUrl(
				window.URL.createObjectURL(file)
			)
		}
		
		this.product.productImages.push(fileHandle)
		
	}
	
}


  constructor(private productService :ProductService,private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute ) { }



  ngOnInit(): void {
	
	//check the app-router to view the resolver setting - key is set as Product 
	//whatever we will get from the resolver will be binded to the product and displayed to the form 
	this.product= this.activatedRoute.snapshot.data['product']
	console.log(this.product)
	
	
	this.productForm = new FormGroup({
		'productName' : new FormControl(),
		'price':new FormControl(),
		'description' :new FormControl(),
		'productImage': new FormControl()
	})
	
  }


clearAllFields(){
	this.product.productName=""
	this.product.price=0
	this.product.description=""
	this.product.productImages=[]

	
}

removeImages(i:number){
	this.product.productImages.splice(i,1)
}

fileDropper(fileHandle:FileHandler){
	
	this.product.productImages.push(fileHandle);
	
}

}
