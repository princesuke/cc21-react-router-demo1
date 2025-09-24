import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const router = createBrowserRouter([
  {
    //TODO Add routes path
    path: "/",
    element: <Layout />,
    errorElement: <h1>Page Not Found</h1>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
