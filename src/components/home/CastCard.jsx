import React from "react";
import { Link } from "react-router-dom";

const CastCard = ({ character, person }) => {
  return (
    <Link to={"/casts/" + person.id} className="cast-card">
      <img src={character.image.medium} />
      <div className="card-info">
        <div className="person-name">{person.name}</div>
        <div className="character-name">as {character.name.substring(0, 10)}</div>
      </div>
    </Link>
  );
};

export default CastCard;
