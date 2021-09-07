import React from "react";
import Search from "../Search";
import { useSelector } from "react-redux";
import Navbar from "../UI/Navbar";
import HeroCard from "../HeroCard/HeroCard";
import { useGetTeamStats } from "../../customHooks/useGetTeamStats";
import { getAverageWeight, getAverageHeight } from "../../helper/getAverageAtr";

const Home = () => {
  const Myteam = useSelector((state) => state.team);

  const stats = useGetTeamStats() || [];

  return (
    <div className="w-100">
      <Navbar />
      <div className="animate__animated animate__fadeIn container">
        <h1 className="text-center">Best Hero Team</h1>
        <div className="mb-5">
          <h3 className="mb-3">Choose your Heroes</h3>
          <Search />
          {Myteam.team.length > 0 && (
            <section className="text-center">
              <h3>Team Stats</h3>
              <h4>
                <span className="text-primary">Average Weight:</span>{" "}
                {getAverageWeight(Myteam)}
              </h4>
              <h4>
                <span className="text-primary">Average Height: </span>{" "}
                {getAverageHeight(Myteam)}
              </h4>
              <hr />
              <p>
                <span className="text-primary">Combat: </span> {stats.combat}
              </p>
              <p>
                <span className="text-primary">Strength: </span>{" "}
                {stats.strength}
              </p>
              <p>
                <span className="text-primary">Intelligence: </span>{" "}
                {stats.intelligence}
              </p>
              <p>
                <span className="text-primary">Power: </span> {stats.power}
              </p>
              <p>
                <span className="text-primary">Durability: </span>{" "}
                {stats.durability}
              </p>
              <p>
                <span className="text-primary">Speed: </span> {stats.speed}
              </p>
            </section>
          )}
        </div>
        <div className="mw-100 row text-center">
          {Myteam && Myteam.team.length > 0 ? (
            Myteam.team.map((hero) => {
              return (
                <div className="col-sm-5" key={hero.name}>
                  {" "}
                  <HeroCard hero={hero} />{" "}
                </div>
              );
            })
          ) : (
            <h4 className="text-dark">start building your team of heroes</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
