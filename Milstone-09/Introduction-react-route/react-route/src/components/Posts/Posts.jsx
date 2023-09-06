import React from "react";
import { useLoaderData } from "react-router-dom";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div>
      <h1>This is Post Component is:{posts.length}</h1>
    </div>
  );
};

export default Posts;
