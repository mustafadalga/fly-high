import type { RootState } from "@/types";

const state: RootState = {
    flightOffers: [],
    origins: [],
    destinations: [],
    selectedOrigin: '',
    selectedDestination: '',
    previousOffersCount: 0,
    isLoadedOffers: false,
    hasError: false
};

export default state;