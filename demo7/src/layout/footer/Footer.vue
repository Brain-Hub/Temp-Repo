<template>
  <!--begin::Footer-->
  <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <!--begin::Container-->
    <div
      class="d-flex flex-column flex-md-row align-items-center justify-content-between"
      :class="{
        'container-fluid': footerWidthFluid,
        'container-xxl': !footerWidthFluid,
      }"
    >
      <!--begin::Copyright-->
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-bold me-1">2021&copy;</span>
        <a
          href="https://brain-hub.com/"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >Brain-Hub</a
        >
      </div>
      <!--end::Copyright-->

      <!--begin::Menu-->
      <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
        <li class="menu-item">
          <a href="https://www.rootero.com/" class="menu-link px-2">Home</a>
        </li>
        <li class="menu-item">
          <a
            href="https://www.rootero.com/wp-admin/"
            target="_blank"
            class="menu-link px-2"
            >Community</a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://github.com/Brain-Hub/Rootero-Cloud/issues"
            target="_blank"
            class="menu-link px-2"
            >Issues</a
          >
        </li>
        <li class="menu-item">
          <a href="#/layout" class="menu-link px-2">More</a>
        </li>
      </ul>
      <!--end::Menu-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KTFooter",
  setup() {
    return {
      footerWidthFluid,
    };
  },
});
</script>
