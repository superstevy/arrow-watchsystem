import React from "react";
import MainVisual from "../components/home/MainVisual";
import EpisodeList from "../components/home/EpisodeList";
import CastList from "../components/home/CastList";

const Home = () => {
  return (
    <div className="home-page">
      <MainVisual />
      <EpisodeList />
      <CastList />
    </div>
  );
};

export default Home;
