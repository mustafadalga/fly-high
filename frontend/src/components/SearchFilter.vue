<script setup lang="ts">
import { useStore } from "vuex";
import { computed, reactive } from "vue";
import Select from "@/components/Select.vue";
import type { Option } from "@/types";

const store = useStore();

const origins = computed<Option[]>(() => store.getters.getOrigins);
const destinations = computed<Option[]>(() => store.getters.getDestinations);
const state = reactive({
  origin: {} as Option,
  destination: {} as Option,
});

const filteredOrigins = computed<Option[]>(() => {
  return origins.value.filter((origin) => origin.id !== state.destination.id);
});
const filteredDestinations = computed<Option[]>(() => {
  return destinations.value.filter(destination => destination.id !== state.origin.id);
});

const searchOffers = () => {
  if (state.origin) {
    store.commit('setSelectedOrigin', state.origin.id);
  }
  if (state.destination) {
    store.commit('setSelectedDestination', state.destination.id);
  }
};
</script>

<template>
  <div class="p-5 bg-white backdrop-blur-lg bg-opacity-40 rounded-lg shadow relative z-10">
    <div class="flex flex-col lg:flex-row w-full items-center gap-5">
      <div class="w-full lg:w-auto flex-1">
        <label class="block text-sm lg:text-base font-medium text-gray-700">From</label>
        <Select
            v-model="state.origin"
            :options="filteredOrigins"
            @keyup.enter="searchOffers"
            placeholder="e.g. New York, NY"/>
      </div>
      <div class="w-full lg:w-auto flex-1">
        <label class="block text-sm lg:text-base font-medium text-gray-700">To</label>
        <Select
            v-model="state.destination"
            :options="filteredDestinations"
            @keyup.enter="searchOffers"
            placeholder="e.g. Los Angeles, CA"/>
      </div>

      <button type="button" @click="searchOffers"
              class="w-full lg:w-20 mt-auto h-10 lg:h-12 px-4 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 text-center">
        <i class="fas fa-search text-sm lg:text-base"></i>
      </button>
    </div>
  </div>
</template>