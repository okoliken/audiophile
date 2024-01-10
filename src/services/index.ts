import { supabase } from "../server/supabase";

export const all_headsets = await supabase
  .from("HEADSETS")
  .select("image, product_name, description, sub_title, sub_title, slug")
  .order("created_at");
