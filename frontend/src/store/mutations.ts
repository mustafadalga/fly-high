import type { FlightOffer, RootState } from "@/types";
import type {
    MutationTree,
} from "vuex";


interface Mutations extends MutationTree<RootState> {
    setFlightOffers(state: RootState, offers: FlightOffer[]): void;

    setOrigins(state: RootState, origins: string[]): void;

    setDestinations(state: RootState, destinations: string[]): void;

    setSelectedOrigin(state: RootState, origin: string): void;

    setSelectedDestination(state: RootState, destination: string): void;

    updatePreviousOffersCount(state: RootState, count: number): void;

    setOffersLoadedStatus(state: RootState, isLoaded: boolean): void;

    toggleErrorStatus(state: RootState, status: boolean): void;
}

const mutations: Mutations = {
    setFlightOffers(state, offers: FlightOffer[]) {
        state.flightOffers = offers;
    },
    setOrigins(state, origins: string[]) {
        state.origins = origins;
    },
    setDestinations(state, destinations: string[]) {
        state.destinations = destinations;
    },
    setSelectedOrigin(state, origin: string) {
        state.selectedOrigin = origin;
    },
    setSelectedDestination(state, destination: string) {
        state.selectedDestination = destination;
    },
    updatePreviousOffersCount(state, count: number) {
        state.previousOffersCount = count;
    },
    setOffersLoadedStatus(state, isLoaded: boolean) {
        state.isLoadedOffers = isLoaded;
    },
    toggleErrorStatus(state, status: boolean) {
        state.hasError = status;
    },
};

export default mutations