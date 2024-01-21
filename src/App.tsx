import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Home } from "./views/Home";
import { HeadPhones } from "./views/head-phones";
import { Speakers } from "./views/speakers";
import { Layout } from "./layouts/Layout";
// import  {AuthLayout} from './layouts/AuthLayout'
import { Earphones } from "./views/earphones";
import { ProductDetails } from "./views/details/product-detail";
import { Login } from "./views/auth/login";
import { ScrollToTop } from "./hooks/scroll-to-top";
import { getHeadsets, getSpeakers } from "./services/index";
import { Product } from "./utils/types";
import { ProductContext } from "./context";

import { PostgrestResponse } from "@supabase/supabase-js";

// Define a type for the Supabase response that you expect
type SupaBaseProductResponse = PostgrestResponse<Product>;

export default function App() {
  const [loading, setLoading] = useState(false);
  const [headsets, setHeadsets] = useState<Product[]>([]);
  const [speakers, setSpeakers] = useState<Product[]>([]);

  useEffect(() => {
    // Start loading
    setLoading(true);

    const fetchHeadsets = async () => {
      try {
        // Assuming getHeadsets is a function that fetches from Supabase
        const response: SupaBaseProductResponse = await getHeadsets();
        if (response.data && Array.isArray(response.data)) {
          setHeadsets(response.data);
        } else {
          console.error("Data is not an array", response.data);
        }
      } catch (error) {
        console.error("Error fetching headsets:", error);
      }
    };

    const fetchSpeakers = async () => {
      try {
        const response: SupaBaseProductResponse = await getSpeakers();

        if (response.data && Array.isArray(response.data)) {
          setSpeakers(response.data);
        } else {
          console.error("Data is not an array", response.data);
        }
      } catch (error) {
        console.error("Error fetching speakers:", error);
      }
    };

    fetchHeadsets();
    fetchSpeakers();

    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <p>loading ...</p>
        </>
      ) : (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/head-phones"
              element={
                <Layout>
                  <ProductContext.Provider value={headsets}>
                    <HeadPhones />
                  </ProductContext.Provider>
                </Layout>
              }
            />
            <Route
              path="/speakers"
              element={
                <Layout>
                  <ProductContext.Provider value={speakers}>
                    <Speakers />
                  </ProductContext.Provider>
                </Layout>
              }
            />
            <Route
              path="/earphones"
              element={
                <Layout>
                  <Earphones />
                </Layout>
              }
            />
            <Route
              path="/product/:slug"
              element={
                <Layout>
                  <ProductDetails />
                </Layout>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}
