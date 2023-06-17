import { describe, expect, it } from "vitest";

import mutations from "./mutations";
import { flightOffers } from '@/mocks';
import type { RootState } from "@/types";
import state from "@/store/state";

describe('mutations', () => {
    it('should update flightOffers state when setFlightOffers mutation is called', () => {
        const stateVariables: RootState = {
            ...state
        }

        mutations.setFlightOffers(stateVariables, flightOffers.offers);
        expect(stateVariables.flightOffers).toEqual(flightOffers.offers);
    });
});
