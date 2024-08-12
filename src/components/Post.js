import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

const Post = ({ id, profileImg, profileName, postImg, caption }) => {
  const [like, setLike] = useState(false);
  const [save, setSave] = useState(false);

  const savePost = () => {
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts")) || [];
    const newPost = { id, profileImg, profileName, postImg, caption };
    const updatedPosts = [...savedPosts, newPost];
    localStorage.setItem("savedPosts", JSON.stringify(updatedPosts));
    // alert("Post saved!");
    setSave((prevState) => !prevState);
  };

  const toggleLike = () => {
    setLike((prevState) => !prevState);
  };

  return (
    <div className="post">
      <img src={profileImg}></img>
      <h2 className="profileName">{profileName}</h2>
      <div>
        <img className="postImg" src={postImg}></img>
      </div>
      <h4 className="caption"> caption: {caption}</h4>
      <div className="buttons">
        <button className="like" onClick={toggleLike}>
          <FontAwesomeIcon icon={like ? fasHeart : farHeart} />
        </button>
        <button className="save" onClick={savePost}>
          <FontAwesomeIcon icon={save ? fasBookmark : farBookmark} />
        </button>
      </div>
    </div>
  );
};

export default Post;
