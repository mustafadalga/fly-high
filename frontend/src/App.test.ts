import { mount } from '@vue/test-utils';
import { createStore } from 'vuex';
import App from './App.vue';
import { describe, expect, it, vi } from "vitest";

describe('App.vue', () => {
    it('renders without errors', () => {
        const store = createStore({
            state: {
                flightOffers: [],
                origins: [],
                destinations: [],
                isLoadedOffers: false
            },
            getters: {
                getFlightOffers: (state) => state.flightOffers,
                getOrigins: (state) => state.origins,
                getDestinations: (state) => state.destinations,
                getOffersLoadedStatus: (state) => state.isLoadedOffers,
                getFilteredFlightOffers:(state)=>state.flightOffers
            },
            actions: {
                fetchFlightOffers: vi.fn(),
            },
        });

        const wrapper = mount(App, {
            global: {
                plugins: [ store ],
            },
        });

        expect(wrapper.exists()).toBe(true);
    });
});
