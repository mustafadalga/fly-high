import { describe, expect, it } from "vitest";
import getters from './getters';
import state from "./state"
import { flightOffers } from '@/mocks'
import type { FlightOffer, RootState } from "@/types";

describe('getters', () => {
    it('should return the flight offers from the state when getFlightOffers getter is called', () => {
        const stateVariables: RootState = {
            ...state
        }
        stateVariables.flightOffers = flightOffers.offers

        const result: FlightOffer[] = getters.getFlightOffers(stateVariables);

        expect(result).toEqual(flightOffers.offers);
    });
});
