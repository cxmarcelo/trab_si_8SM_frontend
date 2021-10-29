import { Product } from "./product";
import { Sector } from "./sector";

export class Category  {

	id: number
	name: string;
	sector: Sector;
	products: Product[];

	constructor(){
	};
 
}
