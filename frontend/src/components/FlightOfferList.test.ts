import { describe, expect, it } from "vitest";
import { mount } from '@vue/test-utils';
import FlightOfferList from "./FlightOfferList.vue";
import { flightOffers } from "@/mocks";

describe('FlightOfferList.vue', () => {
    it('renders without errors', () => {
        const props = {
            offers: flightOffers.offers
        };

        const wrapper = mount(FlightOfferList, {
            props,
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('renders the correct number of FlightOffer components', () => {
        const props = {
            offers: flightOffers.offers
        };

        const wrapper = mount(FlightOfferList, {
            props,
        });

        const flightOfferComponents = wrapper.findAllComponents({ name: 'FlightOffer' });

        expect(flightOfferComponents.length).toBe(props.offers.length);
    });
});
