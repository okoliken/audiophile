import { useState, useEffect, useCallback, useMemo  } from "react";
import { ProductPrototype } from "../utils/types";
import toast from "react-hot-toast";

type Cart = {
  id: string;
  product_name: string;
  product_image: string;
  price: number;
  quantity: number;
};

export const useLocalStorageCart = () => {
  const [cart, setCart] = useState<Cart[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Update localStorage whenever the cart changes
  useEffect(() => {
    // Convert cart to string for comparison
    const currentCartString = JSON.stringify(cart);
    const storedCartString = localStorage.getItem("cart");
  
    // Only update local storage and dispatch event if the cart has actually changed
    if (currentCartString !== storedCartString) {
      localStorage.setItem("cart", currentCartString);
      toast.success("Cart updated");
      window.dispatchEvent(new Event("localstoragecartupdated"));
    }
  }, [cart]);
  
  useEffect(() => {
    const handleStorageUpdate = () => {
      const storedCart = localStorage.getItem("cart");
      setCart(storedCart ? JSON.parse(storedCart) : []);
    };
  
    // Listen for the custom event
    window.addEventListener("localstoragecartupdated", handleStorageUpdate);
  
    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("localstoragecartupdated", handleStorageUpdate);
    };
  }, []);
  

  const notify = (msg: string) => toast.success(msg);

  const findProductIndex = (id: string) => cart.findIndex(item => item.id === id);

  const addToCart = (product: ProductPrototype | null) => {
    if (!product) return;

    const productIndex = findProductIndex(product.slug);
    let updatedCart = [...cart];

    if (productIndex !== -1) {
      updatedCart[productIndex].quantity += 1;
    } else {
      notify('Product added to cart successfully')
      updatedCart.push({
        id: product.slug,
        product_image: product.image,
        quantity: 1,
        price: product.price,
        product_name: product.product_name,
      });
    }

    setCart(updatedCart);
  };

  const increaseQuantity = (id: string) => {
    const productIndex = findProductIndex(id);
    if (productIndex !== -1) {
      let updatedCart = [...cart];
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
    }
  };

  const decreaseQuantity = (id: string) => {
    const productIndex = findProductIndex(id);
    if (productIndex !== -1) {
      let updatedCart = [...cart];
      const newQuantity = updatedCart[productIndex].quantity - 1;
      if (newQuantity > 0) {
        updatedCart[productIndex].quantity = newQuantity;
      } else {
        updatedCart.splice(productIndex, 1); 
      }
      setCart(updatedCart);
    }
  };

  const getTotalQuantityForProduct = (id: string): number => {
    const productIndex = findProductIndex(id);
    return productIndex !== -1 ? cart[productIndex].quantity : 0;
  };

  const getTotalPrice = useCallback((): number => {
    return cart.reduce(
      (total, productPrices) =>
        total + Number(productPrices.price) * productPrices.quantity,
      0
    );
  }, [cart]);

  const getTotalItems = useMemo(() => {
    return cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
  }, [cart]);

  return {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getTotalQuantityForProduct,
    cart,
    getTotalPrice,
    getTotalItems
  };
};
