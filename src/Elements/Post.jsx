import React from "react";
import "../CSS/Post.css";
import { Avatar, IconButton } from "@mui/material";
import {
  ChatBubbleOutline,
  FavoriteBorderOutlined,
  PublishOutlined,
  Repeat,
  Verified,
} from "@mui/icons-material";

const Post = ({ displayName, username, verified, text, img, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee886584fd1cd345/60db8718892a730f5883a347/68a712aa7ffd3da7d91c2fe1469bda58990f7ab7.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>David Moller </h3>
            <span className="post__headerSpecial">
              <Verified className="post__badge" />
              <span>@Molberda</span>
            </span>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a twitter clone using react</p>
          </div>
        </div>
        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjUyNmJnd2RoOGQ5a2pyMjB5MGhqNHhhN2N5dDdhdmZodzVhOWJjMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hryis7A55UXZNCUTNA/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          {" "}
          <IconButton>
            <ChatBubbleOutline fontSize="small" />
          </IconButton>{" "}
          <IconButton>
            <Repeat fontSize="small" />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlined fontSize="small" />
          </IconButton>
          <IconButton>
            <PublishOutlined fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Post;
