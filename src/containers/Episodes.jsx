import React, { useEffect, useState } from "react";
import EpisodeCard from "../components/episodes/EpisodeCard";
import Toggle from "../components/common/Toggle";
import API from "../API.js";
import { Link } from "react-router-dom";

const api = new API();

const Episodes = () => {
  const [arrowEpisodeList, setArrowEpisodeList] = useState(null);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setArrowEpisodeList(arrowEpisodeList.reverse());
  };
  useEffect(() => {
    api
      .getArrowEpisodeList()
      .then((response) => {
        setArrowEpisodeList(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="episodes-page">
      <Link to="/" className="back">
        ←Back
      </Link>
      <div className="subtitle-area">
        <h2>Arrows - Episode List</h2>
        <div>{toggle}</div>
        <Toggle toggle={toggle} setToggle={setToggle} handleToggle={handleToggle} falseText="Sort by OLD" trueText="Sort by New" />
      </div>
      <div className="episode-card-list">
        {arrowEpisodeList && (
          <>
            {arrowEpisodeList.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Episodes;
