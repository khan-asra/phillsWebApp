import { FileHandler } from "./modelHandler";


export interface Product{
	
	productId:Number,
    productName: string,
    price : number,
    description: string,
    productImages:FileHandler[]


}