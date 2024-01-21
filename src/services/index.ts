import { supabase } from "../server/supabase";


export const getHeadsets = async () => {
 const data = await supabase
    .from("HEADSETS")
    .select("image, product_name, description, sub_title, sub_title, slug")
    .order("created_at");

    return data
};
export const getSpeakers = async () => {
  const data = await supabase
  .from("SPEAKERS")
  .select("image, product_name, description, sub_title, sub_title, slug")
  .order("created_at");


  return data
};
