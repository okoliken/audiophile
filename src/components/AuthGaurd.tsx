import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";


interface Props {
  children: React.ReactNode; 
}

export const AuthGuard = ({ children }: Props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("sb-bqtrzqichdhkhdydnjyh-auth-token");

  useEffect(() => {
    if (user) {
      navigate("/product/check-out");
    } else {
      navigate(`/auth/login?redirect=${location.pathname}`);
      toast.success("Login in other to proceed to checkout");
    }
  }, [user, navigate]); 

 
  return user ? children : null;
};
