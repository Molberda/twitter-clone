import React from "react";
import "../CSS/Feed.css";
import { AutoAwesomeOutlined } from "@mui/icons-material";
import Tweetbox from "../Elements/Tweetbox";
import Post from "../Elements/Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
        <AutoAwesomeOutlined className="feed__icon" />
      </div>

      <Tweetbox />
      <Post displayName="" username="" text="" img="" avatar="" verified />
      <Post displayName="" username="" text="" img="" avatar="" verified />
      <Post displayName="" username="" text="" img="" avatar="" verified />
    </div>
  );
};

export default Feed;
