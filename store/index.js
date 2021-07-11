export const state = () => ({
  data: {
    pokedexData: [],
  },
});

export const getters = {};

export const mutations = {
  updatePokedexData: (state, newPokedexData) => {
    state.data.pokedexData = newPokedexData;
  },
};

export const actions = {
  nuxtServerInit() {},
};
