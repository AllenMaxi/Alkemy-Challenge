import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import HeroCard from "./HeroCard/HeroCard";
import Navbar from "./UI/Navbar";

const SearchResults = () => {
  let { search } = useLocation();
  const history = useHistory();
  const heroUrl = search.slice(search.indexOf("=") + 1);
  const [error, setError] = useState("");
  const [hero, setHero] = useState("");
  const api = `http://localhost:8080/search/?hero=${heroUrl}`;

  useEffect(() => {
    const fetchHeroes = async () => {
      let response = await axios.get(api);
      response.data.response === "success"
        ? setHero(response.data.results)
        : setError(response.data.error);
    };
    fetchHeroes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <button className="btn btn-info m-2" onClick={() => history.goBack()}>
            Check your team
          </button>
        </div>
        <div className="row text-center">
          {hero ? (
            hero.map((hero) => {
              return (
                <div className="col-sm-6" key={hero.name}>
                  {" "}
                  <HeroCard hero={hero} />{" "}
                </div>
              );
            })
          ) : (
            <p>{error}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
