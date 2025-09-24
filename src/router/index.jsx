import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import PostsPage from "../pages/PostsPage";
import { fetchPosts } from "../api/posts";
import PostDetail from "../pages/PostDetail";

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
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blog",
        element: <h1>Blog Page</h1>,
      },
      {
        path: "news",
        element: <h1>News Page</h1>,
      },
      {
        path: "posts",
        element: <PostsPage />,
        loader: fetchPosts,
      },
      {
        path: "posts/:id",
        element: <PostDetail />,
      },
    ],
  },
]);

export default router;
