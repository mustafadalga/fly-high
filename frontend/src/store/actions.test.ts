import { describe, expect, it, vi,type Mocked } from "vitest";
import axios from "axios"
import actions from "./actions"
import { flightOffers } from "@/mocks";

vi.mock('axios');
const mockedAxios = axios as Mocked<typeof axios>;




describe("Vuex Store", () => {

    it('should return the flight offers from the state when getFlightOffers getter is called', async () => {
        const commit = vi.fn();
        mockedAxios.get.mockResolvedValue({ data: flightOffers });

        await actions.fetchFlightOffers({ commit });

        expect(commit).toHaveBeenCalledWith('setFlightOffers', flightOffers.offers);
        expect(commit).toHaveBeenCalledWith('setOrigins', flightOffers.origins);
        expect(commit).toHaveBeenCalledWith('setDestinations', flightOffers.destinations);
        expect(commit).toHaveBeenCalledWith('setOffersLoadedStatus', true);
    });

    it('should handle error when fetching flight offers', async () => {
        const commit = vi.fn();
        mockedAxios.get.mockRejectedValue(new Error());

        await actions.fetchFlightOffers({ commit });

        expect(commit).toHaveBeenCalledWith('toggleErrorStatus', true);
        expect(commit).toHaveBeenCalledWith('setOffersLoadedStatus', true);
    });

})