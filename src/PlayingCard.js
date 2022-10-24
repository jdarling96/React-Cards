//import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flip, toggle] = useFlip()

  return (
    <img
      src={flip ? front : back}
      alt="playing card"
      onClick={toggle}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
