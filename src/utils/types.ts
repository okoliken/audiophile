export interface similar_products {
  img: string;
  title: string;
}
export interface ProductDetails {
  price: number;
  feature: string;
  inBox: { x: string; y: string }[];
  images: string[];
  similar_products: similar_products[];
}

export interface ProductPrototype {
  subTitle: string | null;
  title: string;
  description: string;
  image: string;
  slug: string;
  details: ProductDetails;
}
