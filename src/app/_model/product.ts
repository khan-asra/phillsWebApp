import { FileHandler } from "./modelHandler";


export interface Product{
	
	
    productName: string,
    price : number,
    description: string,
    productImages:FileHandler[]


}