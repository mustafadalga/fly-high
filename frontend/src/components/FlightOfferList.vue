<script setup lang="ts">
import FlightOffer from "./FlightOffer.vue";
import type { PropType } from "vue";
import type { FlightOffer as IFlightOffer } from "@/types"

const props = defineProps({
  offers: {
    type: Array as PropType<IFlightOffer[]>,
    required: true,
  }
})
</script>
<template>
  <div class="grid gap-8">
    <FlightOffer
        v-for="offer in offers"
        :key="offer.uuid"
        :offer="offer"/>
  </div>
</template>

