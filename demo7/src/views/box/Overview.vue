<template>
  <div class="row g-5 g-xxl-8">
    <div class="col-xl-6">
      <!--<KTWidget1 widget-classes="mb-5 mb-xxl-8"></KTWidget1>
      <KTWidget2 widget-classes="mb-5 mb-xxl-8"></KTWidget2>
      <KTWidget3 widget-classes="mb-5 mb-xxl-8"></KTWidget3>
      <KTWidget4 widget-classes="mb-5 mb-xxl-8"></KTWidget4>
      <KTWidget5 widget-classes="mb-5 mb-xxl-8"></KTWidget5>
      <KTWidget6 widget-classes="mb-5 mb-xxl-8"></KTWidget6>-->
    </div>

    <div class="col-xl-6">
      <!--<KTChartWidget1 widget-classes="mb-5 mb-xxl-8"></KTChartWidget1>

      <KTListWidget5 widget-classes="mb-5 mb-xxl-8"></KTListWidget5>

      <KTEngageWidget1 widget-classes="mb-5 mb-xxl-8"></KTEngageWidget1>-->
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
//import KTWidget1 from "@/components/widgets/feeds/Widget1.vue";
//import KTWidget2 from "@/components/widgets/feeds/Widget2.vue";
//import KTWidget3 from "@/components/widgets/feeds/Widget3.vue";
//import KTWidget4 from "@/components/widgets/feeds/Widget4.vue";
//import KTWidget5 from "@/components/widgets/feeds/Widget5.vue";
//import KTWidget6 from "@/components/widgets/feeds/Widget6.vue";
//import KTChartWidget1 from "@/components/widgets/charts/Widget1.vue";
//import KTListWidget5 from "@/components/widgets/lists/Widget5.vue";
//import KTEngageWidget1 from "@/components/widgets/engage/Widget1.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n/index";

export default defineComponent({
  name: "overview",
  components: {
    //KTWidget1,
    //KTWidget2,
    //KTWidget3,
    //KTWidget4,
    //KTWidget5,
    //KTWidget6,
    //KTChartWidget1,
    //KTListWidget5,
    //KTEngageWidget1,
  },
  setup() {
    const { t, te } = useI18n();
    var boxs = { data: { listBoxes: { items: [{ id: "" }] } } };
    var box;
    const num_units = computed(() => {
      return box.unit.items.length;
    });
    const route = useRoute();

    boxs = JSON.parse(
      localStorage.getItem("BOXS") || "{'data':{'listBoxes':'items':[]}}"
    );
    box = boxs.data.listBoxes.items.find(
      (element) => element.id == route.query.id
    );
    const units = computed(() => {
      return box.unit.items;
    });
    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("Overview", [
        translate("environments"),
        box.name,
      ]);
    });
    return {
      boxs,
      units,
      box,
      num_units,
      translate,
    };
  },
});
</script>
