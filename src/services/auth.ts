import toast from "react-hot-toast";
import { supabase } from "../server/supabase";
import { useNavigate, useLocation } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = new URLSearchParams(location.search).get("redirect");

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (data) {
        signInWithPassword(email, password);
      }

      if (error?.message) {
        toast.error(error.message);
      }

      return data;
    } catch (error) {
      if (error) throw error;
    }
  };

  const signInWithPassword = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data.user) {
      navigate(redirect || "/product/check-out");
    } 
    

    else if (error?.message) {
      toast.error(error.message);
    }
  };
  
  const signInWithGoogle = async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider:'google'
    })
  
  
    if (data.provider) {
      navigate(redirect || "/product/check-out");
    } 
    

    else if (error?.message) {
      toast.error(error.message);
    }
  }

  return {
    signInWithEmail,
    signInWithGoogle
  };
};


