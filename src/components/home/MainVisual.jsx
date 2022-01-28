import React, { useState, useEffect } from "react";
import MainImg from "../../asset/img/main.png";
import MainSpImg from "../../asset/img/main-sp.png";
import API from "../../API.js";

const api = new API();

const MainVisual = () => {
  const [arrowShowDetail, setArrowShowDetail] = useState(null);
  useEffect(() => {
    api
      .getArrowShowDetail()
      .then((response) => {
        setArrowShowDetail(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="main">
      <img src={MainImg} className="main__pc-image" />
      <img src={MainSpImg} className="main__sp-image" />
      {arrowShowDetail && (
        <div className="show-info">
          <h1>{arrowShowDetail.name}</h1>
          <p className="tags">
            {arrowShowDetail.type} - Premiered: {arrowShowDetail.premiered} - Ended: {arrowShowDetail.ended}
          </p>
          <p className="description">{arrowShowDetail.summary.replace("<p>", "").replace("</p>", "")}</p>
        </div>
      )}
    </section>
  );
};

export default MainVisual;
