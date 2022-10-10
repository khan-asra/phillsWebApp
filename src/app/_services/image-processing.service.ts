import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandler } from '../_model/modelHandler';
import { Product } from '../_model/product';


@Injectable({
	providedIn: 'root'
})
export class ImageProcessingService {

	constructor(private sanitizer: DomSanitizer) { }

	public createImage(product: Product) {
		const productImages: any[] = product.productImages

		const fileHandleForProductImages: FileHandler[] = []

		for (let i = 0; i < productImages.length; i++) {
			const imagesFileData = productImages[i]
			// if not working please check the the console -> make sure that Prodcut image array 
			const imageBlob = this.dataURItoBlob(imagesFileData.imageByte, imagesFileData.imageType)

			const imageFile = new File([imageBlob], imagesFileData.imageName, { type: imagesFileData.imageType })


			//using the filehandler interface

			const finalFileHandler: FileHandler = {
				file: imageFile,
				url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
			};

			fileHandleForProductImages.push(finalFileHandler)

		}
		
		product.productImages =fileHandleForProductImages
		return product;



	}

	//atab converts string into bytes
	public dataURItoBlob(picByte: any, imageType: any) {
		const byteString = window.atob(picByte)
		const arrayBuffer = new ArrayBuffer(byteString.length)


		const int8Array = new Uint8Array(arrayBuffer)

		for (let i = 0; i < byteString.length; i++) {
			int8Array[i] = byteString.charCodeAt(i);
		}

		const blob = new Blob([int8Array], { type: imageType })
		return blob

	}
}
