import { createContext } from "react";
import { headsets, earphones, speakers } from "../utils/index";

const products = {
  headsets: headsets,
  earphones: earphones,
  speakers: speakers,
};

export const productContext = createContext(products);
