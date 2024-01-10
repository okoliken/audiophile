import { createContext } from "react";
import { Product } from '../utils/types'



export const HeadSetContext = createContext<Product[] | null>(null);
