import { supabase } from "../server/supabase";
import { ProductPrototype } from "../utils/types";
import {  PostgrestMaybeSingleResponse } from "@supabase/supabase-js";

type SupaBaseProductResponse = PostgrestMaybeSingleResponse<(ProductPrototype | null) >;

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
