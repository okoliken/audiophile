import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";
import { HeadPhones } from "./views/head-phones";
import { Speakers } from "./views/speakers";
import { Layout } from "./layouts/Layout";
// import  {AuthLayout} from './layouts/AuthLayout'

import { RouteLoadingBar } from "./components/RouteLoadingBar";
import { Earphones } from "./views/earphones";
import { ProductDetails } from "./views/details/product-detail";
import { Login } from "./views/auth/login";
import { ScrollToTop } from "./hooks/scroll-to-top";
import { ProductContext } from "./context";
import { FullScreenPreloader, Loader } from "./components/Preloader";
import { useProducts } from "./hooks/useFetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function App() {
  const { headsets, speakers, earphone, loading, error } = useProducts();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  if (loading) {
    return (
      <FullScreenPreloader>
        <Loader />
      </FullScreenPreloader>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <RouteLoadingBar />
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
                <ProductContext.Provider value={earphone}>
                  <Earphones />
                </ProductContext.Provider>
              </Layout>
            }
          />
          <Route
            path="/product/:name/:slug"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
