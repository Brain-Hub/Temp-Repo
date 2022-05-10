<template>
  <!--begin::Dashboard-->
  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4"></div>
    <div class="col-xxl-4"></div>
    <div class="col-xxl-4"></div>
  </div>

  <div class="row gy-5 gx-xl-8">
    <div class="col-xxl-4"></div>
    <div class="col-xxl-8"></div>
  </div>

  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4"></div>
    <div class="col-xxl-4"></div>
    <div class="col-xxl-4"></div>
  </div>

  <div class="row g-5 gx-xxl-8">
    <div class="col-xxl-4"></div>
    <div class="col-xxl-8"></div>
  </div>
  <!--end::Dashboard-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useI18n } from "vue-i18n/index";

export default defineComponent({
  name: "dashboard",
  components: {},
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs(translate("dashboard"), []);
    });
    const { t, te } = useI18n();

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    return {
      translate,
    };
  },
});
</script>
