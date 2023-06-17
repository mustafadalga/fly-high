<script setup lang="ts">
import FlightOfferList from "./FlightOfferList.vue";
import NoFlightOffer from "./NoFlightOffer.vue";
import FetchError from "./FetchError.vue";
import { computed, watch, ref } from "vue";
import { useStore } from "vuex";
import type { FlightOffer } from "@/types";

const store = useStore();
const offers = computed<FlightOffer[]>(() => store.getters.getFilteredFlightOffers);
const hasFlightOffer = computed<boolean>(() => !!offers.value.length)
const isLoadedOffers = computed<boolean>(() => store.getters.getOffersLoadedStatus);
const animationTriggerKey = ref(Date.now());
const flightOfferListClass = computed<string>(() => hasFlightOffer.value ? "animate__slideInDown" : "animate__slideOutUp")
const noFlightOfferClass = computed<string>(() => hasFlightOffer.value ? "animate__fadeOut" : "animate__fadeIn")
const hasError = computed<boolean>(() => store.getters.getErrorStatus)

watch(() => offers.value, () => {
  animationTriggerKey.value = Date.now();
}, { deep: true });
</script>
<template>
  <FlightOfferList
      v-if="hasFlightOffer"
      :key="animationTriggerKey"
      :offers="offers"
      class="animate__animated"
      :class="flightOfferListClass"
  />
  <FetchError
      v-else-if="hasError"
      :key="animationTriggerKey"
      class="animate__animated"
      :class="noFlightOfferClass"
  />
  <NoFlightOffer
      v-else-if="isLoadedOffers"
      key="no-flight-offer"
      class="animate__animated"
      :class="noFlightOfferClass"
  />
</template>

