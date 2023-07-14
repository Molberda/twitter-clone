import React from "react";
import "../CSS/Post.css";
import { Avatar } from "@mui/material";
import { Verified } from "@mui/icons-material";

const Post = ({ displayName, username, verified, text, img, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee886584fd1cd345/60db8718892a730f5883a347/68a712aa7ffd3da7d91c2fe1469bda58990f7ab7.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>David Moller <span><Verified/></span></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
