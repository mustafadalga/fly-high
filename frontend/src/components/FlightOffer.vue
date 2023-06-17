<script setup lang="ts">
import { type PropType, ref } from 'vue';
import type { FlightOffer } from "@/types";


const props = defineProps({
  offer: {
    type: Object as PropType<FlightOffer>,
    required: true,
  },
});
const isHeartClicked = ref<boolean>(false);


const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
const toggleHeart = (): void => {
  isHeartClicked.value = !isHeartClicked.value;
};
</script>

<template>
  <div
      class="relative flex flex-col lg:flex-row lg:items-center overflow-hidden lg:h-52 bg-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm rounded-xl border border-[rgba(255,255,255,0.25)]">
    <img :src="offer.image"
         class="w-full max-h-60 sm:max-h-80 md:max-h-96 lg:h-full lg:max-h-none lg:min-h-full  lg:max-w-xs"
         alt="Flight Offer">

    <button @click="toggleHeart"
            class="absolute top-2 left-2">
      <i class="duration-300 transition-colors text-base lg:text-xl"
         :class="[isHeartClicked ? 'fas fa-heart text-red-600' : 'far fa-heart text-white']"
      ></i>
    </button>

    <div class="grid gap-2  my-6 lg:my-8 lg:my-auto mx-6 md:mx-8 lg:mx-10">
      <div class="flex items-center gap-2">
        <div class="text-base lg:text-lg xl:text-xl font-semibold">{{ offer.origin }}</div>
        <i class="fa-solid fa-chevron-right text-xs lg:text-sm"></i>
        <div class="text-base lg:text-lg xl:text-xl font-semibold">{{ offer.destination }}</div>
      </div>
      <div class="flex items-center text-primary text-sm lg:text-base">
        <i class="fas fa-dollar-sign mr-2"></i>
        <span>Price: {{ offer.price.amount }} {{ offer.price.currency }}</span>
      </div>
      <div class="flex items-center text-primary text-sm lg:text-base">
        <i class="far fa-calendar-alt mr-2"></i>
        <span>Departure Date: {{ formatDate(offer.departureDate) }}</span>
      </div>
      <div class="flex items-center text-primary text-sm lg:text-base">
        <i class="far fa-calendar-alt mr-2"></i>
        <span>Return Date: {{ formatDate(offer.returnDate) }}</span>
      </div>
      <div class="flex items-center text-primary text-sm lg:text-base">
        <i class="fas fa-chair mr-2"></i>
        <span>Seat Availability: {{ offer.seatAvailability }}</span>
      </div>
    </div>

    <div class="grid w-full lg:w-auto place-items-center ml-auto mr-8 bg-red">
      <button
          class="h-10 lg:h-12 w-full lg:w-40 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all px-4 rounded-md">
        <span class="text-sm lg:text-base">Book</span>
      </button>
    </div>
  </div>
</template>