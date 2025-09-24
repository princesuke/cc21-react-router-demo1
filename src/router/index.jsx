import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
// import PostsPage from "../pages/PostsPage";
// import { fetchPosts, fetchPostDetail } from "../api/posts";
// import PostDetail from "../pages/PostDetail";
import { postRoutes } from "./posts.router";

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
      postRoutes,
      //   {
      //     path: "posts",
      //     children: [
      //       { index: true, element: <PostsPage />, loader: fetchPosts },
      //       { path: ":id", element: <PostDetail />, loader: fetchPostDetail },
      //     ],
      //   },
      //   {
      //     path: "posts",
      //     element: <PostsPage />,
      //     loader: fetchPosts,
      //   },
      //   {
      //     path: "posts/:id",
      //     element: <PostDetail />,
      //     loader: fetchPostDetail,
      //   },
    ],
  },
]);

export default router;
