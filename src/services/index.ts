import { supabase } from "../server/supabase";
import { ProductPrototype } from "../utils/types";
import {  PostgrestSingleResponse } from "@supabase/supabase-js";

type SupaBaseProductResponse = PostgrestSingleResponse<(ProductPrototype[] | null) >;

export const getHeadsets = async () => {
  const data = await supabase
    .from("HEADSETS")
    .select("image, product_name, description, sub_title, sub_title, slug")
    .order("created_at");

  return data;
};

export const getSpeakers = async () => {
  const data = await supabase
    .from("SPEAKERS")
    .select("image, product_name, description, sub_title, sub_title, slug")
    .order("created_at");

  return data;
};

export const getEarphones = async () => {
  const data = await supabase
    .from("EARPHONES")
    .select("image, product_name, description, sub_title, sub_title, slug")
    .order("created_at");

  return data;
};
export const getCart = async () => {
  const { data, error } = await supabase
    .from("CART")
    .select("product_image, product_name, quantity, total_price, price, user_id")
    .order("created_at");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getSingleProduct = async (
  tName: string | undefined,
  slug: string | undefined
): Promise<SupaBaseProductResponse> => {
  
  
  const data = await supabase
    .from(String(tName))
    .select("*")
    .eq("slug", slug)
    .order("created_at");

  
    return data
};
