import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { HeadSet } from "./views/HeadSet";
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
        path: "/headsets",
        element: <HeadSet />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
