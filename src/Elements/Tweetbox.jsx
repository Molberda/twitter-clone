import React from "react";
import "../CSS/Tweetbox.css";
import { Avatar, Button } from "@mui/material";

const Tweetbox = () => {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee886584fd1cd345/60db8718892a730f5883a347/68a712aa7ffd3da7d91c2fe1469bda58990f7ab7.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
          <input placeholder="What's happening?" type="text" />
        </div>
          <input className="tweetbox__imgInput" placeholder="Optional: Enter image URL" type="text" />

        <Button className="tweetbox__tweetbutton"><h2>Tweet</h2></Button>
      </form>
    </div>
  );
};

export default Tweetbox;
