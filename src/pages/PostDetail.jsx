import React from "react";
import { useParams } from "react-router";

export default function PostDetail() {
  const { id } = useParams();

  return <div>PostDetail {id}</div>;
}
