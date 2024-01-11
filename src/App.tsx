import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { HeadPhones } from "./views/head-phones";
import { Speakers } from "./views/speakers";
import { Layout } from "./layouts/Layout";
import { Earphones } from "./views/earphones";
import { ProductDetails } from "./views/details/product-detail";
import { ScrollToTop } from "./hooks/scroll-to-top";
import { all_headsets, all_speakers } from "./services/index";

import { ProductContext } from "./context";
export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
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
                <ProductContext.Provider value={all_headsets.data}>
                  <HeadPhones />
                </ProductContext.Provider>
              </Layout>
            }
          />
          <Route
            path="/speakers"
            element={
              <Layout>
                <ProductContext.Provider value={all_speakers.data}>
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
    </>
  );
}
