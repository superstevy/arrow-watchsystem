import React from "react";

const EpisodeCard = ({ episode }) => {
  return (
    <section className="episode-card">
      <div className="top-rated">TOP - RATED</div>
      <div className="date">{episode.airdate}</div>
      <div className="title">{episode.name}</div>
      <p>{episode.summary.replace("<p>", "").replace("</p>", "").substring(0, 200)}</p>
    </section>
  );
};

export default EpisodeCard;
