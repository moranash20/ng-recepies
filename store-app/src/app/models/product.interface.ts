import { Description } from "./product-type.enum";

export interface Product{
    name: string;
    id: number;
    price: number;
    description: Description;
    imgUrl: string;
}