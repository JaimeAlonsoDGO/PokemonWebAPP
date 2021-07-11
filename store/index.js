export const state = () => ({
  data: {
    pokedexData: [],
  },
  menuVisible: {
    hidden: true,
  },
});

export const getters = {};

export const mutations = {
  updatePokedexData: (state, newPokedexData) => {
    state.data.pokedexData = newPokedexData;
  },
  showMenu(state) {
    state.menuVisible.hidden = !state.menuVisible.hidden;
  },
};

export const actions = {
  nuxtServerInit() {},
};
