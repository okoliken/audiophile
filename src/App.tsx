// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Home } from "./views/Home";
// import styled from "styled-components";
import { Navbar } from "./components/navbar/Navbar";
// import { device } from "./components/devices";

import { PageFooter } from "./components/footer/Footer";
// import { Layout } from "./layouts/Layout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//     ],
//   },
// ]);



function App() {
  return (
    // <RouterProvider router={router} />
    <>
      <Navbar />

      <PageFooter />
    </>
  );
}

export default App;
