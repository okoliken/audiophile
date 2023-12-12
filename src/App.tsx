import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { HeadPhones } from "./views/head-phones";
import { Layout } from "./layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/head-phones",
        element: <HeadPhones />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
