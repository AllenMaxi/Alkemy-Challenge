import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../UI/Navbar";
import "animate.css";

const Details = () => {
  const history = useHistory();
  const [hero, setHero] = useState("");
  const [error, setError] = useState("");
  let { id } = useParams();
  const api = `http://localhost:8080/hero/${id}`;

  useEffect(() => {
    const fetchHeroDetails = async () => {
      let response = await axios.get(api);
      response.data.response === "success"
        ? setHero(response.data)
        : setError(response.data.error);
    };
    fetchHeroDetails();
  }, [api]);
  const { image, biography, appearance, name, work } = hero;

  return (
    <div className="animate__animated animate__fadeIn">
      <Navbar />
      {error ? (
        <div>
          We have some issues to deal with <small>{error}</small>
        </div>
      ) : hero ? (
        <div>
          <div className="text-center">
            <img
              alt="Hero"
              src={image.url}
              className="mw-100 border border-5 border-dark mt-3"
            />
          </div>
          <div className="text-center">
            <h1>{name}</h1>
            <p>
              <span className="text-primary">Full name:</span>{" "}
              {biography["full-name"]}
            </p>
            <p>
              <span className="text-primary">Aliases:</span>{" "}
              {biography["aliases"].join(", ")}
            </p>
            <p>
              <span className="text-primary">Work base:</span> {work["base"]}
            </p>
            <p>
              <span className="text-primary">Height:</span>{" "}
              {appearance["height"][1]}
            </p>
            <p>
              <span className="text-primary">Weight:</span>{" "}
              {appearance["weight"][1]}
            </p>
            <p>
              <span className="text-primary">Hair color:</span>{" "}
              {appearance["hair-color"]}
            </p>
            <p>
              <span className="text-primary">Eye color:</span>{" "}
              {appearance["eye-color"]}
            </p>
          </div>
        </div>
      ) : null}
      <div className="text-center">
        <button className="btn btn-primary" onClick={() => history.goBack()}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Details;
