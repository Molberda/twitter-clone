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
      <Post
        displayName="David Moller"
        username="molberda14"
        text="this is a test"
        img="Y2lkPTc5MGI3NjExYjUyNmJnd2RoOGQ5a2pyMjB5MGhqNHhhN2N5dDdhdmZodzVhOWJjMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n"
        avatar="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee886584fd1cd345/60db8718892a730f5883a347/68a712aa7ffd3da7d91c2fe1469bda58990f7ab7.jpg?auto=webp&format=pjpg&width=3840&quality=60"
        verified={true}
      />
      <Post displayName="" username="" text="" img="" avatar="" verified />
      <Post displayName="" username="" text="" img="" avatar="" verified />
    </div>
  );
};

export default Feed;
