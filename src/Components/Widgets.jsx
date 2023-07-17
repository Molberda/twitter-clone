import React from "react";
import "../CSS/Widgets.css";
import { Search } from "@mui/icons-material";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>

        <TwitterTweetEmbed tweetId={"1680280727395483652"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Cr7stianismo_"
          options={{ height: 400 }}
        />

        <TwitterShareButton url="" options={{ text: "reactjs is awesome" }} />
      </div>
    </div>
  );
};

export default Widgets;
