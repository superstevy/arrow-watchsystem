import React from "react";

const EpisodeCard = ({ episode }) => {
  return (
    <section className="episode-card">
      <img src={episode.image.medium} />
      <div className="episode-info">
        <div className="title">{episode.name}</div>
        <div className="date">{episode.airdate}</div>
        <p>{episode.summary.replace("<p>", "").replace("</p>", "").substring(0, 200)}</p>
      </div>
    </section>
  );
};

export default EpisodeCard;
