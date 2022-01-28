import React, { useState, useEffect } from "react";
import EpisodeCard from "./EpisodeCard";
import API from "../../API.js";
import { Link } from "react-router-dom";

const api = new API();

const EpisodeList = () => {
  const [arrowEpisodeList, setArrowEpisodeList] = useState(null);
  useEffect(() => {
    api
      .getArrowEpisodeList()
      .then((response) => {
        setArrowEpisodeList(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="episode-list">
      <div className="subtitle-area">
        <h2>Episodes</h2>
        <Link to="/episodes" className="button">
          See More
        </Link>
      </div>
      <div className="episode-card-list">
        {arrowEpisodeList && (
          <>
            {arrowEpisodeList.slice(0, 2).map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default EpisodeList;
