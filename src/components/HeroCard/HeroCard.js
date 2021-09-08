import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { removeHero } from "../../Redux/herosDuck";
import { useDispatch, useSelector } from "react-redux";
import { addHero } from "../../Redux/herosDuck";

import "animate.css";

const HeroCard = ({ hero }) => {
  let { pathname } = useLocation();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);

  const { name, id, image } = hero;

  const setNewHero = (hero) => {
    const countAlignment = (alignment) => {
      return team.team.reduce(
        (accum, current) =>
          current.biography.alignment === alignment ? ++accum : accum,
        0
      );
    };

    if (team.team.length === 6) {
      setError("The team is full");
    } else if (team.team.some((h) => h.id === hero.id)) {
      setError("This hero is already in the team");
    } else if (
      countAlignment("bad") === 3 &&
      hero.biography.alignment === "bad"
    ) {
      setError("The limit of villians is 3");
    } else if (
      countAlignment("good") === 3 &&
      hero.biography.alignment === "good"
    ) {
      setError("The limit of good Heros is 3");
    } else {
      dispatch(addHero(hero));
    }
  };

  return (
    <div className="card mb-2 bg-dark  animate__animated animate__fadeIn">
      <div className="no-gutters">
        <img
          src={image.url}
          className="card-img border border-5 border-dark w-50 rounded-circle"
          alt={name}
        />
        <div>
          <div className="card-body">
            <h5 className="card-title text-light"> {name} </h5>
            {error ? (
              <div className="text-danger">{error}</div>
            ) : (
              <div>
                <Link to={`/hero/${id}`}>
                  <button className="btn btn-primary">Details</button>
                </Link>

                {pathname !== "/search" ? (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(removeHero(id));
                    }}
                    className="btn btn-danger ms-2"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setNewHero(hero);
                    }}
                    className="btn btn-primary ms-3"
                  >
                    Add hero
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
