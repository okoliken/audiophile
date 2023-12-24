import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { HeadPhones } from "./views/head-phones";
import { Speakers } from "./views/speakers";
import { Layout } from "./layouts/Layout";
import { Earphones } from "./views/earphones";

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
      {
        path: "/speakers",
        element: <Speakers />,
      },
      {
        path: "/earphones",
        element: <Earphones />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
