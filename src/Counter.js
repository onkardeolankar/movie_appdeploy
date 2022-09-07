import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export function Counter() {
  // let like = 100
  const [like, setLike] = useState(0);
  const [Dislike, setDisLike] = useState(0);
  return (
    <div className="wrapper">
      <Badge
        className="Like"
        aria-label="like"
        color="success"
        onClick={() => {
          setLike(like + 1);
        }}
        badgeContent={like}
      >
        <ThumbUpAltIcon />
      </Badge>

      <Badge
        aria-label="dislike"
        color="error"
        onClick={() => {
          setDisLike(Dislike + 1);
        }}
        badgeContent={Dislike}
      >
        <ThumbDownIcon />
      </Badge>
    </div>
  );
}
