import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import API from "../API.js";
import { Link } from "react-router-dom";

const api = new API();

const Cast = () => {
  const { castId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    api
      .getCast(castId)
      .then((response) => {
        setCast(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="cast-page">
      <Link to="/" className="back">
        ←Back
      </Link>
      {cast && (
        <div className="cast-info">
          <img src={cast.image.original} />
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{cast.name}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{cast.country.name}</td>
              </tr>
              {cast.birthday && (
                <tr>
                  <th>Birthday</th>
                  <td>{cast.birthday}</td>
                </tr>
              )}
              <tr>
                <th>Gender</th>
                <td>{cast.gender}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Cast;
