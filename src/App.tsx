import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import { Home } from "./views/Home";
import { HeadPhones } from "./views/head-phones";
import { Speakers } from "./views/speakers";
import { Layout } from "./layouts/Layout";
import { Earphones } from "./views/earphones";
import { ProductDetails } from "./views/details/product-detail";

import { ScrollToTop } from "./hooks/scroll-to-top";
import { all_headsets, all_speakers } from "./services/index";
import {
  FullScreenPreloader,
  AnimatedText,
  exitAnimation,
} from "./components/Preloader";
import { ProductContext } from "./context";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const word = "audiophile".split("");

  const letterAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 500 },
    }),
  };

  return (
    <>
      {isLoading ? (
        <FullScreenPreloader
          variants={exitAnimation}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit="exit"
        >
          {word.map((letter, index) => (
            <AnimatedText
              key={index}
              custom={index}
              variants={letterAnimation}
              initial="initial"
              animate="animate"
            >
              {letter}
            </AnimatedText>
          ))}
        </FullScreenPreloader>
      ) : (
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
      )}
    </>
  );
}
