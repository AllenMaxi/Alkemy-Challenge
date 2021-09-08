export const getAverageWeight = (Myteam) => {
  if (Myteam.team.length > 0) {
    let weight = Myteam.team.map((hero) => parseInt(hero.appearance.weight[1]));
    return Math.floor(
      weight.reduce((acc, curr) => acc + curr) / Myteam.team.length
    );
  }
};

export const getAverageHeight = (Myteam) => {
  if (Myteam.team.length > 0) {
    let height = Myteam.team.map((hero) => parseInt(hero.appearance.height[1]));
    return Math.floor(
      height.reduce((acc, curr) => acc + curr) / Myteam.team.length
    );
  }
};
