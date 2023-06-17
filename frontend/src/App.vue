<template>
  <Header/>
  <div
      class="min-h-screen w-[calc(100%-4rem)]  lg:w-full max-w-screen-lg my-40 mx-8 sm:mx-auto pt-12 px-8 pb-8 grid content-baseline items-baseline gap-20 bg-[rgba(255,255,255,0.1)] backdrop-blur-[1.25rem] rounded-[1.25rem] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
    <SearchFilter/>
    <FlightOffers/>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import { useStore } from 'vuex';
import SearchFilter from "@/components/SearchFilter.vue";
import FlightOffers from "@/components/FlightOffers.vue";

const store = useStore();
store.dispatch('fetchFlightOffers');
</script>
