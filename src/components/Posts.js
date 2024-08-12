import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <Post key={post.id} {...post} savePost={() => post.savePost()} />
        );
      })}
    </div>
  );
};

export default Posts;
