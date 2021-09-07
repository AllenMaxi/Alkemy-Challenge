export const getAverageWeight = (Myteam) => {
  let weights = [];
  if (Myteam.team.length > 0) {
    Myteam.team.map((hero) =>
      weights.push(parseInt(hero.appearance.weight[1]))
    );
    return Math.floor(
      weights.reduce((acc, curr) => acc + curr) / Myteam.team.length
    );
  }
};

export const getAverageHeight = (Myteam) => {
  let heights = [];
  if (Myteam.team.length > 0) {
    Myteam.team.map((hero) =>
      heights.push(parseInt(hero.appearance.height[1]))
    );
    return Math.floor(
      heights.reduce((acc, curr) => acc + curr) / Myteam.team.length
    );
  }
};
