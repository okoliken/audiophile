import { useState, useEffect } from "react";
import { getHeadsets, getSpeakers, getEarphones } from "../services/index";
import { Product } from "../utils/types";
import { PostgrestResponse } from "@supabase/supabase-js";

type SupaBaseProductResponse = PostgrestResponse<Product>;

export const useProducts = () => {
  const [headsets, setHeadsets] = useState<Product[]>([]);
  const [speakers, setSpeakers] = useState<Product[]>([]);
  const [earphone, setEarphones] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);



   const fetchData = async (
    fetchFunction: () => Promise<SupaBaseProductResponse>,
    setFunction: (data: Product[]) => void
  ) => {
    try {
      const response = await fetchFunction();
      if (response.data && Array.isArray(response.data)) {
        setFunction(response.data);
      } else {
     
        setError(new Error("Data is not an array"));
      }
    } catch (error) {
    
      setError(error as Error);
    }
  };


   

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      await fetchData(getHeadsets, setHeadsets);
      await fetchData(getSpeakers, setSpeakers);
      await fetchData(getEarphones, setEarphones);
      setLoading(false);
    };

    fetchAllData();
  }, []);

  return { headsets, speakers, earphone, loading, error };
};
