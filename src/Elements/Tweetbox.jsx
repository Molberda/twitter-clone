import React, { useState } from "react";
import "../CSS/Tweetbox.css";
import { Avatar, Button } from "@mui/material";
import db from "../Firebase";

const Tweetbox = () => {

  const [tweetMsg, setTweetMsg] = useState('');
  const [tweetImg, setTweetImg] = useState('');

  const sendTweet = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      displayName: 'Daniel Moller',
      username: 'damolber',
      verified: true,
      text: tweetMsg,
      img: tweetImg,
      avatar: '',
    })

    setTweetImg('')
    setTweetMsg('')

  }

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltee886584fd1cd345/60db8718892a730f5883a347/68a712aa7ffd3da7d91c2fe1469bda58990f7ab7.jpg?auto=webp&format=pjpg&width=3840&quality=60" />
          <input value={tweetMsg} onChange={(e) => setTweetMsg(e.target.value)} placeholder="What's happening?" type="text" />
        </div>
        <div className="tweetbox__organizer">
          <input
          value={tweetImg}
          onChange={(e) => setTweetImg(e.target.value)}
            className="tweetbox__imgInput"
            placeholder="Optional: Enter image URL"
            type="text"
          />

          <Button onClick={sendTweet} type="submit" className="tweetbox__tweetbutton">
            <h2>Tweet</h2>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Tweetbox;
