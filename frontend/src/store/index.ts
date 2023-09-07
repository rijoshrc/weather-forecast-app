import { createStore } from "vuex";

export default createStore({
  state: {
    weather: null, // keep the selected place details
    loading: false,
    error: false,
  },
  getters: {
    getWeather(state: any) {
      return state.weather?.current_weather || null;
    },
  },
  mutations: {
    /**
     * Set the weather object to state
     * @param state
     * @param weather
     */
    setWeather(state, weather: any) {
      state.weather = weather;
    },

    /**
     * Set the loading state
     * @param state
     * @param loading
     */
    setLoading(state, loading: boolean) {
      state.loading = loading;
    },

    /**
     * Set the error state
     * @param state
     * @param error
     */
    setError(state, error: boolean) {
      state.error = error;
    },
  },
  actions: {},
  modules: {},
});
