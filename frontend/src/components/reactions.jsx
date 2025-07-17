import React, { useState } from "react";
import LikeIcon from "../Icons/LikeIcon.jsx";
import UnlikeIcon from "../Icons/UnlikeIcon.jsx";
import CommentIcon from "../Icons/CommentIcon.jsx";
import RetweetIcon from "../Icons/RetweetIcon.jsx";
import ShareIcon from "../Icons/ShareIcon.jsx";
import ReactionButton from "./ReactionButton.jsx";

function Reactions({ postId, likes: initialLikes, comments: initialComments, retweets: initialRetweets }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const [comments, setComments] = useState(initialComments);
  const [retweets, setRetweets] = useState(initialRetweets);


  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div style={{ ...styles.reactions }}>
      <div style={styles.buttons}>
        <ReactionButton className="hover:text-pink-600 hover:bg-pink-600/10"  
        onClick={handleLike}>
          {liked ? <LikeIcon /> : <UnlikeIcon />}
          <span className="ml-1.5">{likes}</span>
        </ReactionButton>

        <ReactionButton className="hover:text-blue-500 hover:bg-blue-500/10">
          <CommentIcon />
          <span className="ml-1.5">{comments}</span>
        </ReactionButton>

        <ReactionButton className="hover:text-green-500 hover:bg-green-500/10">
          <RetweetIcon />
          <span className="ml-1.5">{retweets}</span>
        </ReactionButton>

        <ReactionButton className="hover:text-gray-300 hover:bg-gray-300/10">
          <ShareIcon />
        </ReactionButton>
      </div>
    </div>
  );
}

const styles = {
  reactions: {
    justifyContent: "center",
    paddingBottom: 0,
    minHeight: "45px",
    margin: 0,
    bottom: 0,
    display: "flex",
  },
  buttons: {
    borderTop: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 0,
    padding: 0,
    width: "100%",
    display: "flex",
  },
  button: {
    alignItems: "center",
    display: "flex",
    margin: 0,
    padding: "0.5rem",
    lineHeight: 1,
    position: "relative",
    color: "#666",
    borderRadius: "4rem",
  },
};

export default Reactions;
