export const state = () => ({
  loadingStatus: false,
  data: {
    pokedexData: [],
    pokemonDetails: [],
  },
  layoutPokedex: 0,
  menuVisible: {
    hidden: true,
  },
});

export const getters = {
  getLayout(state) {
    return state.layout;
  },
};

export const mutations = {
  updateLayout: (state, layout) => {
    state.layoutPokedex = layout;
  },
  updateLoadingStatus(state, newLoadingStatus) {
    state.loadingStatus = newLoadingStatus;
  },
  updatePokedexData: (state, newPokedexData) => {
    state.data.pokedexData = newPokedexData;
  },
  updatePokemonDetails: (state, newPokemonData) => {
    state.data.pokemonDetails = newPokemonData;
  },
  showMenu(state) {
    state.menuVisible.hidden = !state.menuVisible.hidden;
  },
};

export const actions = {
  nuxtServerInit() {},
  async getPokemonDetails({ commit }, URL) {
    commit('updateLoadingStatus', true);
    try {
      const pokemonDetails = await fetch(URL).then((res) => res.json());
      commit('updatePokemonDetails', pokemonDetails);
      commit('updateLoadingStatus', false);
    } catch (e) {
      console.log('Error while getting Pokemon Details: ', e);
    }
  },
};
