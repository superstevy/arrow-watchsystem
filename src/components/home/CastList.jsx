import React, { useState, useEffect } from "react";
import API from "../../API.js";
import CastCard from "./CastCard";
import { Link } from "react-router-dom";
import { CSVLink, CSVDownload } from "react-csv";

const api = new API();

const CastList = () => {
  const [arrowCastList, setArrowCastList] = useState(null);
  const [castCSVData, setCastCSVData] = useState(null);
  useEffect(() => {
    api
      .getArrowCastList()
      .then((response) => {
        setArrowCastList(response.data);
        convertCastCSVData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const convertCastCSVData = (castList) => {
    let tmpCastCSVData = [["Character Name", "Person Name", "Country Name", "Birthday", "Gender", "Photo"]];
    castList.map((cast) => {
      let country = "";
      if (cast.person.country) {
        country = cast.person.country.name;
      }
      tmpCastCSVData.push([cast.character.name, cast.person.name, country, cast.person.birthday, cast.person.gender, cast.person.image.original]);
    });
    setCastCSVData(tmpCastCSVData);
  };

  return (
    <section className="cast-list">
      <div className="subtitle-area">
        <h2>Top Cast</h2>
        {castCSVData && (
          <CSVLink filename={"arrow-cast-member-data.csv"} data={castCSVData} className="button">
            Download Cast
          </CSVLink>
        )}
      </div>
      <div className="cast-card-list">
        {arrowCastList && (
          <>
            {arrowCastList.map((cast) => (
              <CastCard key={cast.character.id} character={cast.character} person={cast.person} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default CastList;
