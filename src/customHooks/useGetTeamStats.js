import { useSelector } from "react-redux";

export const useGetTeamStats = () => {
  const heroTeam = useSelector((state) => state.team);

  if (heroTeam.team.length > 0) {
    let stats = [];
    heroTeam.team.map((hero) => {
      let powerstats = Object.values(hero.powerstats);
      let maximoStat = Math.max(...powerstats).toString();
      let stat = Object.keys(hero.powerstats).find(
        (key) => hero.powerstats[key] === maximoStat
      );
      stats.push(stat);
    });

    const heroesSts = {};

    let atributes = [
      "strength",
      "intelligence",
      "power",
      "durability",
      "combat",
      "speed",
    ];

    for (const atribute of atributes) {
      heroesSts[atribute] = 0;
    }
    heroTeam.team.map((hero) => {
      for (let i = 0; i < atributes.length; i++) {
        heroesSts[atributes[i]] += Number(hero.powerstats[atributes[i]]);
      }
    });

    return heroesSts;
  }
};
