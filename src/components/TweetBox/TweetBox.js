import React, {useState} from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from '../../firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("")
  const [tweetImage, setTweetImage] = useState("")

  const sendTweet = e => {
    e.preventDefault() // Don't allow page refresh

    //add to database
    db.collection('posts').add({
      displayName: "Helen Morris",
      username: "Samuel Rose",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media.giphy.com/media/3oz8xSwPT41eZOvS2A/source.gif",

    })

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input 
          onChange={(e) => setTweetMessage(e.target.value)} 
          value={tweetMessage} 
          placeholder="What's happening?" 
          type="text">

          </input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Enter image URL"
          type="text"
        ></input>
        <Button 
        onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
