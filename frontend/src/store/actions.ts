import type {
    Commit
} from "vuex";
import axios from 'axios';

const actions = {
    async fetchFlightOffers({ commit }: { commit: Commit }) {
        try {
            const url: string = "https://gist.githubusercontent.com/mustafadalga/fa6ca25bc74692618fcc807f3963ebac/raw/7ba17731e2cf58a2e2facecab8c17ab7f308ffa5/data.json";
            const response = await axios.get(url);
            const data = await response.data;
            commit('setFlightOffers', data.offers);
            commit('setOrigins', data.origins);
            commit('setDestinations', data.destinations);
        } catch (error) {
            commit("toggleErrorStatus", true);
        } finally {
            commit("setOffersLoadedStatus", true);
        }
    },
}

export default actions