import { createContext } from "react";
import { Product } from '../utils/types'



export const ProductContext = createContext<Product[] | null>(null);
