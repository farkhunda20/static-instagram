import React, { useEffect, useState } from "react";
import Post from "./Post";

const SavedPosts = () => {
  const [savedPosts, setSavedPOsts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedPosts")) || [];
    setSavedPOsts(saved);
  }, []);

  return (
    <div className="posts">
      <div className="savedPost">
        {savedPosts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    </div>
  );
};

export default SavedPosts;
