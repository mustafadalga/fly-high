import type {
    GetterTree,
} from "vuex";
import type { FlightOffer, RootState } from "@/types";

interface Getters extends GetterTree<RootState, RootState> {
    getFlightOffers(state: RootState): FlightOffer[];

    getOrigins(state: RootState): string[];

    getDestinations(state: RootState): string[];

    getOffersLoadedStatus(state: RootState): boolean;

    getErrorStatus(state: RootState): boolean;

    getFilteredFlightOffers(state: RootState): FlightOffer[];
}

const getters: Getters = {
    getFlightOffers: (state) => state.flightOffers,
    getOrigins: (state) => state.origins,
    getDestinations: (state) => state.destinations,
    getOffersLoadedStatus: (state) => state.isLoadedOffers,
    getErrorStatus: (state) => state.hasError,
    getFilteredFlightOffers: (state) => {
        const { selectedOrigin, selectedDestination, flightOffers } = state;
        if (!selectedOrigin && !selectedDestination) {
            return flightOffers;
        }

        const filterByOrigin = (offer: FlightOffer): boolean => {
            const origin: string = offer.origin.toLowerCase();
            return !selectedOrigin || origin.includes(selectedOrigin.toLowerCase());
        };

        const filterByDestination = (offer: FlightOffer): boolean => {
            const destination: string = offer.destination.toLowerCase();
            return !selectedDestination || destination.includes(selectedDestination.toLowerCase());
        };

        if (selectedOrigin && !selectedDestination) {
            return flightOffers.filter(filterByOrigin);
        }

        if (!selectedOrigin && selectedDestination) {
            return flightOffers.filter(filterByDestination);
        }

        return flightOffers.filter((offer: FlightOffer) => filterByOrigin(offer) && filterByDestination(offer));
    },
};

export default getters;