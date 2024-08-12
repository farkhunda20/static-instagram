import "./App.css";
import Post from "./components/Post";
import Posts from "./components/Posts";
import postsData from "./components/postsData";
import { useState } from "react";
import { useEffect } from "react";
import SavedPosts from "./components/SavedPosts";

function App() {
  const [posts, setPosts] = useState(postsData);
  const [displaySavedPosts, setDisplaySaved] = useState(false);

  const showAllPosts = () => {
    setDisplaySaved(false);
  };

  const showSavedPosts = () => {
    setDisplaySaved(true);
  };

  return (
    <div className="App">
      <div className="main-buttons">
        <button className="allposts-btn" onClick={showAllPosts}>
          Home
        </button>
        <button onClick={showSavedPosts} className="savedPosts-btn">
          {" "}
          Saved
        </button>
      </div>

      {displaySavedPosts ? <SavedPosts /> : <Posts posts={posts} />}
    </div>
  );
}

export default App;
