<template>
  <!--begin::Toolbar-->
  <div class="d-flex flex-wrap flex-stack my-5">
    <!--begin::Heading-->
    <h2 class="fs-2 fw-bold my-2">
      <span class="fs-6 text-gray-400 ms-1">List {{listView}}</span>
    </h2>
    <!--end::Heading-->

    <!--begin::Controls-->
    <div class="d-flex flex-wrap my-1">
      <!--begin::Select wrapper-->
      <div class="m-0">
        <!--begin::Select-->
        <select
          name="status"
          v-model="listView"
          data-control="select2"
          data-hide-search="true"
          class="form-select form-select-white form-select-sm fw-bolder w-125px"
        >
          <option value="Units" selected>Units</option>
          <option value="Sensors">Sensors</option>
          <option value="Interactors">Interactors</option>
          <option value="Measures">Measures</option>
          <option value="Systems">Systems</option>
        </select>
        <!--end::Select-->
      </div>
      <!--end::Select wrapper-->
    </div>
    <!--end::Controls-->
  </div>
  <!--end::Toolbar-->

  <!--begin::Row-->
  <div v-if="listView == 'Units'" class="row g-6 g-xl-9">
    <!--begin::Col-->
    <div
      class="col-md-6 col-xl-4"
      v-for="unit in box.unit.items"
      v-bind:key="unit.id"
    >
      <div>
        <KTCard :unit="unit"></KTCard>
      </div>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <!--end::Row-->

    <!--begin::Pagination-->
    <div class="d-flex flex-stack flex-wrap pt-10">
      <div class="fs-6 fw-bold text-gray-700">
        Showing 1 to {{Math.min(box.unit.items.length,9)}} of {{box.unit.items.length}} entries
      </div>

      <!--begin::Pages-->
      <ul class="pagination">
        <li class="page-item previous">
          <a href="#" class="page-link"><i class="previous"></i></a>
        </li>

        <li v-for="page in Math.ceil(box.unit.items.length/9)" v-bind:key="page" class="page-item">
          <a :href="'#/box/units?id=&page=' + page" class="page-link">{{page}}</a>
        </li>

        <li class="page-item next">
          <a href="#" class="page-link"><i class="next"></i></a>
        </li>
      </ul>
      <!--end::Pages-->
    </div>
    <!--end::Pagination-->
  </div>
  <div v-if="listView == 'Interactors'" class="row g-6 g-xl-9 p-5">
    <Table9 :units="box.unit.items"></Table9>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import KTCard from "@/components/cards/Unit-Card.vue";
import Table9 from "@/components/widgets/tables/Widget9.vue";
import { useRoute } from "vue-router";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { Boxes } from "@/core/helpers/box";

export default defineComponent({
  name: "units",
  components: {
    KTCard,
    Table9,
  },
  data: function () {
    return {
      listView: "Units",
    };
  },
  setup() {
    var box = computed(() => {
      const route = useRoute();
      var box_ = { name: "" };
      try {
        box_ = Boxes.value.data.listBoxes.items.find(
          (element) => element.id == route.query.id
        );
        return box_;
      } catch (err) {
        return {};
      } finally {
        //console.log(box_);
      }
    });
    onMounted(() => {
      const route = useRoute();
      setCurrentPageBreadcrumbs("Units", [
        "Environments",
        Boxes.value.data.listBoxes.items.find(
          (element) => element.id == route.query.id
        ).name,
      ]);
    });

    const users1 = [
      { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
      { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users2 = [
      { name: "Alan Warden", initials: "A", state: "warning" },
      { name: "Brian Cox", src: "media/avatars/150-4.jpg" },
    ];

    const users3 = [
      { name: "Mad Masy", src: "media/avatars/150-1.jpg" },
      { name: "Cris Willson", src: "media/avatars/150-2.jpg" },
      { name: "Mike Garcie", initials: "M", state: "info" },
    ];

    const users4 = [
      { name: "Nich Warden", initials: "N", state: "warning" },
      { name: "Rob Otto", initials: "R", state: "success" },
    ];

    const users5 = [
      { name: "Francis Mitcham", src: "media/avatars/150-5.jpg" },
      { name: "Michelle Swanston", src: "media/avatars/150-13.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users6 = [
      { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
      { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users7 = [
      { name: "Meloday Macy", src: "media/avatars/150-3.jpg" },
      { name: "Rabbin Watterman", initials: "S", state: "success" },
    ];

    const users8 = [
      { name: "Emma Smith", src: "media/avatars/150-1.jpg" },
      { name: "Rudy Stone", src: "media/avatars/150-2.jpg" },
      { name: "Susan Redwood", initials: "S", state: "primary" },
    ];

    const users9 = [
      { name: "Meloday Macy", src: "media/avatars/150-3.jpg" },
      { name: "Rabbin Watterman", initials: "S", state: "danger" },
    ];

    return {
      box,
      users1,
      users2,
      users3,
      users4,
      users5,
      users6,
      users7,
      users8,
      users9,
    };
  },
});
</script>
