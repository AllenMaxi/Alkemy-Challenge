//Types
export const TYPES = {
  ADD_TEAM_HERO: "ADD_TEAM_HERO",
  REMOVE_TEAM_HERO: "REMOVE_TEAM_HERO",
};

//Reducer
const initialState = {
  team: [],
};

export default function heroReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_TEAM_HERO:
      return { ...state, team: [...state.team, action.payload] };
    case TYPES.REMOVE_TEAM_HERO:
      return {
        team: [...state.team.filter((hero) => hero.id !== action.payload)],
      };
    default:
      return state;
  }
}

//Actions

export const addHero = (hero) => ({
  type: TYPES.ADD_TEAM_HERO,
  payload: hero,
});

export const removeHero = (heroID) => ({
  type: TYPES.REMOVE_TEAM_HERO,
  payload: heroID,
});
