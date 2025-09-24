import PostsPage from "../pages/PostsPage";
import PostDetail from "../pages/PostDetail";
import { fetchPosts, fetchPostDetail } from "../api/posts";

export const postRoutes = {
  path: "posts",
  children: [
    { index: true, element: <PostsPage />, loader: fetchPosts },
    { path: ":id", element: <PostDetail />, loader: fetchPostDetail },
  ],
};
