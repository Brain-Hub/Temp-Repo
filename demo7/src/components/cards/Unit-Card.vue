<template>
  <!--begin::Card-->
  <a href="#" class="card border border-2 border-gray-300 border-hover">
    <!--begin:: Card body-->
    <div class="card-body p-9">
      <!--begin::Name-->
      <div class="fs-3 fw-bolder text-dark">
        {{ Unit.name }}
        <span v-if="unit.status" class="svg-icon svg-icon-2 svg-icon-success">
          <inline-svg
            v-if="Date.now() <= Date.parse(unit.status.createdAt) + 10000"
            src="media/icons/duotune/electronics/elc007.svg"
            class="ml-1 mb-2"
          />
        </span>
        <span v-if="unit.status" class="svg-icon svg-icon-4 svg-icon-warning">
          <inline-svg
            v-if="Date.now() > Date.parse(unit.status.createdAt) + 10000"
            src="media/icons/duotune/general/gen040.svg"
            class="ml-3"
          />
        </span>
        <span v-if="!unit.status" class="svg-icon svg-icon-4 svg-icon-gray">
          <inline-svg
            src="media/icons/duotune/general/gen040.svg"
            class="ml-3"
          />
        </span>
      </div>
      <!--end::Name-->

      <!--begin::Description-->
      <p class="text-gray-400 fw-bold fs-5 mt-1 mb-7">
        {{ Unit.id }}
      </p>
      <!--end::Description-->

      <!--begin::Info-->
      <div class="d-flex flex-wrap mb-5">
        <!--begin::Due-->
        <div
          class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-7 mb-3"
        >
          <div class="fs-6 text-gray-800 fw-bolder">{{ Unit.updatedAt }}</div>
          <div class="fw-bold text-gray-400">Last Update</div>
        </div>
        <!--end::Due-->

        <!--begin::Budget-->
        <div
          class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3"
        >
          <div class="fs-6 text-gray-800 fw-bolder">
            {{ interactors(unit).length > 0 ? interactors(unit).length : 0 }}
          </div>
          <div class="fw-bold text-gray-400">Interactors</div>
        </div>
        <!--end::Budget-->
      </div>
      <!--end::Info-->

      <!--begin::Progress-->
      <div
        class="h-4px w-100 bg-light mb-5"
        data-bs-toggle="tooltip"
        :title="`This project ${30}% completed`"
      >
        <div
          class="rounded h-4px"
          role="progressbar"
          :style="{ width: 30 + `%` }"
          :aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <!--end::Progress-->

      <template v-if="false">
        <!--begin::Users-->
        <div class="symbol-group symbol-hover">
          <template v-for="(user, index) in users" :key="index">
            <!--begin::User-->
            <div
              class="symbol symbol-35px symbol-circle"
              data-bs-toggle="tooltip"
              :title="user.title"
            >
              <img v-if="user.src" alt="Pic" :src="user.src" />
              <span
                v-else
                class="symbol-label fw-bolder"
                :class="`bg-${user.state} text-inverse-${user.state}`"
                >{{ user.initials }}</span
              >
            </div>
            <!--begin::User-->
          </template>
        </div>
        <!--end::Users-->
      </template>
    </div>
    <!--end:: Card body-->
  </a>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "unit-card",
  components: {},
  props: {
    unit: {},
  },
  methods: {
    interactors: function (item) {
      var interactors = JSON.parse(item.pinout.i)
        ? JSON.parse(item.pinout.i)
        : [];
      return interactors;
    },
    state: function (item, key) {
      var obs = JSON.parse(item.status.obs);
      return obs.find((element) => element.i == key);
    },
  },
  setup(props) {
    var Unit = computed(() => {
      return props.unit;
    });
    return {
      Unit,
    };
  },
});
</script>
