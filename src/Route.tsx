import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Recipe from "./Pages/Recipe";

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
        path: "/recipe/:recipeId",
        element: <Recipe />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
