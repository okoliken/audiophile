export interface similar_products {
  img: string;
  title: string;
}

interface InBox {
  x: string;
  y: string
}

export interface ProductDetails {
  price: number;
  feature: string[];
  inBox: { x: string; y: string }[];
  images: string[];
  similar_products: similar_products[];
}

export interface ProductPrototype {
  sub_title: string | null;
  product_name: string;
  description: string;
  image: string;
  slug: string;
  details: ProductDetails;
  price:number;
  features:string;
  in_box:InBox[];
  images:string[];
  similar_products:{ x: string; y: string }[]
}
export interface Product {
  sub_title: string | null;
  product_name: string;
  description: string;
  image: string;
  slug: string;
}


export interface Options {
  name:string,
  value:string
}