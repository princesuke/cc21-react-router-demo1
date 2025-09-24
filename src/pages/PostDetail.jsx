import React from "react";
import { useParams, useLoaderData } from "react-router";

export default function PostDetail() {
  const { id } = useParams();
  const post = useLoaderData();

  //   console.log(post);

  return (
    <div className="text-left">
      PostDetail {id}
      <h2 className="text-2xl">{post.title}</h2>
      <br />
      <p>{post.body}</p>
    </div>
  );
}
