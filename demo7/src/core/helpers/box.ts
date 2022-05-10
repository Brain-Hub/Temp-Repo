import { computed } from "vue";
import store from "@/store/index";

/**
 * Returns Boxes
 * @returns {object}
 */
export const Boxes = computed(() => {
  return store.getters.Boxes();
});
