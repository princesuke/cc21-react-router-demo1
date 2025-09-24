import React from "react";
import { useLoaderData, Link, useNavigate } from "react-router";

export default function PostsPage() {
  const posts = useLoaderData();
  // console.log(posts);
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Posts Page</h1>
      <ul style={{ listStyle: "none" }}>
        {
          /* ใช้ map พ่น data ของ posts */
          //  post.id: post.title โดยใช้ map
          posts.map((post) => (
            <Link to={`/posts/${post.id}`}>
              <li key={post.id}>
                {post.id}: {post.title}
              </li>
            </Link>
          ))
        }
      </ul>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}
