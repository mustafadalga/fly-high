<script setup lang="ts">
import {
  ref,
  type PropType,
  computed,
  onMounted,
  onBeforeUnmount,
  watch,
  type ComputedRef,
  type Ref
} from "vue";
import type { Option } from "@/types";

type KeyHandler = {
  [key in 'ArrowDown' | 'ArrowUp' | 'Enter']?: () => void;
}

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    required: true,
  },
  placeholder: {
    type: String,
    default: "Search...",
  },
  noOptionsText: {
    type: String,
    default: "Sorry, no matching options!",
  },
  modelValue: {
    type: Object as PropType<Option>,
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: Option): void
}>()

const search = ref<string>("");
const isOpen = ref<boolean>(false);
const highlightedIndex = ref<number>(0);
const containerElement: Ref<HTMLElement | null> = ref(null);
const selectedOption = ref<Option>({
  id: "",
  name: "",
});


const filteredOptions = computed<Option[]>(() => {
  if (props.options) {
    return props.options.filter((option) =>
        search.value ? option.name.toLowerCase().includes(search.value.toLowerCase()) : true
    );
  } else {
    return [];
  }
});

const placeholderText = computed(() => {
  if (selectedOption.value && selectedOption.value.name) {
    return selectedOption.value.name
  }

  return props.placeholder
}) as ComputedRef<string>;

const resetHighlight = (): void => {
  highlightedIndex.value = 0;
};
const select = (option: Option): void => {
  selectedOption.value = option;
  emit("update:modelValue", option);
  search.value = option.name;
  resetHighlight();
  isOpen.value = false;
};


const clearSearch = (): void => {
  select({
    id: "",
    name: ""
  })
};

const prepareForNewSearch = (): void => {
  if (search.value === selectedOption.value.name) {
    search.value = "";
  }
};

const onArrowDown = () => {
  if (highlightedIndex.value < filteredOptions.value.length - 1) {
    highlightedIndex.value++;
  }
};

const onArrowUp = () => {
  if (highlightedIndex.value > 0) {
    highlightedIndex.value--;
  }
};

const onEnter = () => {
  if (isOpen.value && highlightedIndex.value >= 0) {
    const highlightedOption: Option = filteredOptions.value[highlightedIndex.value]
    if (highlightedOption) {
      select(highlightedOption);
    }
  } else {
    isOpen.value = true;
  }
};

const keydownHandlers:KeyHandler = {
  ArrowDown: onArrowDown,
  ArrowUp: onArrowUp,
  Enter: onEnter
};

const handleKeydown = (event: KeyboardEvent) => {
  const handler = keydownHandlers[event.key as keyof KeyHandler];
  if (handler) {
    handler();
  }
};

watch(() => props.modelValue, (newVal: Option) => {
  selectedOption.value = newVal;
}, { immediate: true });

const handleBlur = (): void => {
  isOpen.value = false
  if (!props.options?.some((option) => option.name === search.value)) {
    search.value = selectedOption.value ? selectedOption.value.name : "";
  }

  resetHighlight();
};

onMounted(async () => {
  const container = containerElement.value;
  if (container) {
    container.addEventListener('keydown', handleKeydown);
  }
});

onBeforeUnmount(() => {
  const container = containerElement.value;
  if (container) {
    container.removeEventListener('keydown', handleKeydown);
  }
});
</script>
<template>
  <div
      class="relative text-gray-600"
      ref="containerElement"
      @click="isOpen = true"
      tabindex="0"
      @blu.stop="handleBlur">
    <input
        v-model="search"
        @mousedown.stop="prepareForNewSearch"
        autocomplete="off"
        class="w-full py-2 pl-4 pr-10 h-12 border-2 rounded-lg focus:outline-none text-sm lg:text-base input"
        :placeholder="placeholderText"/>
    <div
        class="absolute h-full top-0 right-2.5 grid place-items-center cursor-pointer"
        @click.stop="clearSearch"
    >
      <i class="fas fa-times text-gray-400 text-xs"></i>
    </div>

    <template v-if="isOpen">
      <div
          v-if="filteredOptions.length"
          class="absolute w-full top-full  max-h-80 overflow-y-auto -mt-1 bg-white border-2 border-t-0 rounded-b-lg z-20 scrollbar">
        <div
            v-for="(option,index) in filteredOptions"
            @click.stop="select(option)"
            :class="{'bg-blue-50': highlightedIndex == index}"
            class="px-4 grid content-center h-12 hover:bg-blue-50 cursor-pointer text-sm lg:text-base option">
          {{ option.name }}
        </div>
      </div>
      <div
          v-else-if="search.length"
          class="absolute w-full top-full -mt-1 grid place-items-center bg-white border-2 border-t-0 rounded-b-lg z-20 px-4 h-12 text-sm lg:text-base"
      >
        {{ noOptionsText }}
      </div>
    </template>
  </div>
</template>
