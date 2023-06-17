import { mount } from '@vue/test-utils';
import Select from './Select.vue';
import { describe, expect, it } from "vitest";
import { flightOffers } from "@/mocks";
import type { Option } from "@/types";

describe('Select.vue', () => {
    it('renders without errors', () => {
        const wrapper = mount(Select, {
            props: {
                options: [],
            },
        });

        expect(wrapper.exists()).toBe(true);
    });

    it('emits update:modelValue event when an option is selected', async () => {
        const options: Option[] = [ ...flightOffers.origins ]
        const wrapper = mount(Select, {
            props: {
                options: options,
            },
        });

        // Simulate opening the dropdown
        await wrapper.find('input').trigger('click');

        // Simulate selecting the first option
        const optionElement = wrapper.find('.option');
        await optionElement.trigger('click');

        // Assert emitted event
        expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    });

    it('displays noOptionsText when no options match the search', async () => {
        const options: Option[] = [ ...flightOffers.origins ]
        const noOptionsText: string = 'No matching options';
        const searchText: string = "Non-matching option";

        const wrapper = mount(Select, {
            props: {
                options: options,
                noOptionsText
            },
        });

        // Simulate opening the dropdown
        await wrapper.find('input').trigger('click');
        // Set search value to a non-matching option
        await wrapper.find('input').setValue(searchText);

        // Assert that noOptionsText is displayed
        expect(wrapper.text()).toContain(noOptionsText);
    });
});
