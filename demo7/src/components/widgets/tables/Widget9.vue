<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Interactors</span>

        <span class="text-muted mt-1 fw-bold fs-7"></span>
      </h3>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="w-25px">
                <div
                  class="form-check form-check-sm form-check-custom form-check-solid"
                >
                  <input class="form-check-input" type="checkbox" value="1" />
                </div>
              </th>
              <th class="min-w-150px">Name</th>
              <th class="min-w-140px">State</th>
              <th class="min-w-120px">Mode</th>
              <th class="min-w-100px text-end">Actions</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(unit, index) in units" :key="index">
              <template v-for="(item, index) in interactors(unit)" :key="index">
                <tr>
                  <td>
                    <div
                      class="form-check form-check-sm form-check-custom form-check-solid"
                    >
                      <input
                        class="form-check-input widget-9-check"
                        type="checkbox"
                        :value="index"
                      />
                    </div>
                  </td>

                  <td>
                    <div class="d-flex align-items-center">
                      <div class="d-flex justify-content-start flex-column">
                        <a
                          href="#"
                          class="text-dark fw-bolder text-hover-primary fs-6"
                          >{{ item.s }}</a
                        >

                        <span class="text-muted fw-bold text-muted d-block fs-7"
                          >{{ unit.name }} Pin: {{ item.p }}</span
                        >
                      </div>
                    </div>
                  </td>

                  <td>
                    <div class="row ml-2">
                      <div class="row">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          v-bind:id="unit.id + item.s"
                          type="range"
                          min="0"
                          value="0"
                          max="100"
                          class="mt-5 mb-4"
                          v-on:change="sendCommand(unit.id, item.s, 'ACD')"
                        />
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-dark fw-bolder text-hover-primary d-block fs-6 mr-4"
                    ></a>
                    <span
                      v-if="unit.status"
                      class="text-muted fw-bold text-muted d-block fs-7"
                      >{{ unit.status.updatedAt }}</span
                    >
                  </td>

                  <td>
                    <div class="d-flex flex-column w-100 me-2">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary d-block fs-6"
                        >{{ state(unit, "M").v }}
                        <span
                          v-if="unit.status"
                          class="svg-icon svg-icon-2 svg-icon-success"
                        >
                          <inline-svg
                            v-if="
                              Date.now() <=
                              Date.parse(unit.status.createdAt) + 10000
                            "
                            src="media/icons/duotune/electronics/elc007.svg"
                            class="ml-4 mb-1"
                          />
                        </span>
                        <span
                          v-if="unit.status"
                          class="svg-icon svg-icon-4 svg-icon-warning"
                        >
                          <inline-svg
                            v-if="
                              Date.now() >
                              Date.parse(unit.status.createdAt) + 10000
                            "
                            src="media/icons/duotune/general/gen040.svg"
                            class="ml-3"
                          />
                        </span>
                        <span
                          v-if="!unit.status"
                          class="svg-icon svg-icon-4 svg-icon-gray"
                        >
                          <inline-svg
                            src="media/icons/duotune/general/gen040.svg"
                            class="ml-3"
                          /> </span
                      ></a>
                    </div>
                  </td>

                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotune/general/gen019.svg"
                        />
                      </span>
                    </a>
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import $ from "jquery";
import store from "@/store";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
    units: [],
  },
  methods: {
    interactors: function (item) {
      return JSON.parse(item.pinout.i);
    },
    sendCommand: function (unitId, slot, command) {
      store.dispatch(Actions.SEND_COMMAND, {
        unitID: unitId,
        Command: command + " " + $("#" + unitId + slot).val(),
      });
      return false;
    },
    state: function (item, key) {
      var obs = JSON.parse(item.status.obs);
      return obs.find((element) => element.i == key);
    },
  },
  computed: {},
  setup() {
    const checked = ref(false);

    return {
      checked,
    };
  },
});
</script>
<style lang="scss">
/* Slider *
 * ====== */
/* ## Slider main element */
input[type="range"] {
  display: block;
  margin: 0;
  padding: 0;
  font-size: inherit;
  width: 9.9em;
  height: 1em;
  border-radius: 0.25em;
  border: 0.2em solid #313131;
  background-color: #313131;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s linear;
  box-shadow: 0 0 0 0 transparent;
  &:focus {
    box-shadow: 0 0 0 0.1em #aaaaaa;
  }
  &:hover {
    box-shadow: 0 0 0 0.15em #6fc5f0;
  }
}

/* ## Orientation tweak, with [orient] attribute in degrees */
/* > I know it's not standard, but that's the cleaner way I was thinking of. */
input[type="range"][orient] {
  /* > Would be cool heh :-) : */
  transform: rotate(attr(orient));
}

input[type="range"][orient="90deg"] {
  transform: rotate(90deg);
}
input[type="range"][orient="180deg"] {
  transform: rotate(180deg);
}
input[type="range"][orient="270deg"] {
  transform: rotate(270deg);
}

/* ### all vertical ranges : */
input[type="range"] {
  &[orient="90deg"],
  &[orient="270deg"] {
    &::-webkit-slider-thumb {
      cursor: ns-resize;
    }
    &::-moz-range-thumb {
      cursor: ns-resize;
    }
    &::-ms-thumb {
      cursor: ns-resize;
    }
    margin: 4.5em -4.2em;
    height: 15px;
    display: inline-block;
  }
}

/* ## Slider components */
/* ### Slider::-track */
input[type="range"] {
  @mixin track() {
    border: none;
    background: none;
    height: 100%;
    width: 100%;
  }
  &::-webkit-slider-runnable-track {
    @include track();
  }
  &::-moz-range-track {
    @include track();
  }
  &::-ms-track {
    @include track();
  }
}

/* ### Slider::-thumb */
input[type="range"] {
  @mixin thumb() {
    margin: 0.05em;
    padding: 0;
    height: 0.9em;
    width: 0.9em;
    border-radius: 0.1em;
    box-sizing: border-box;
    border: none;
    background-color: #6fc5f0;
    box-shadow: -10em 0 0 0 #313131, -9em 0 0 0 #313131, -8em 0 0 0 #2f343f,
      -7em 0 0 0 #283f6b, -6em 0 0 0 #214893, -5em 0 0 0 #1a52bc,
      -4em 0 0 0 #2769d3, -3em 0 0 0 #3e87dc, -2em 0 0 0 #55a5e6,
      -1em 0 0 0 #6fc5f0, 1em 0 0 0 #ffffff, 2em 0 0 0 #ffffff,
      3em 0 0 0 #ffffff, 4em 0 0 0 #ffffff, 5em 0 0 0 #ffffff, 6em 0 0 0 #ffffff,
      7em 0 0 0 #ffffff, 8em 0 0 0 #ffffff, 9em 0 0 0 #ffffff;
    cursor: ew-resize;
  }
  &::-webkit-slider-thumb {
    @include thumb();
  }
  &::-moz-range-thumb {
    @include thumb();
  }
  &::-ms-thumb {
    @include thumb();
  }
}

/* ## Browser tweaks */
/* ### webkit */
input[type="range"] {
  &,
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
}

/* ### IE */
input[type="range"] {
  &::-ms-track {
    color: transparent;
  }
  &::-ms-fill-lower,
  &::-ms-fill-upper,
  &::-ms-tooltip {
    display: none;
  }
}

/* Label *
 * ====== */
/* ## Label main element */
label[type="range"] {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  font-size: inherit;
  &:first-letter {
    font-size: 0.6em;
  }
  line-height: 0.6em;
  width: 9.9em;
  height: 1em;
  border-radius: 0.25em;
  color: #313131;
  font-family: arial;
  //font-weight: bold;
  border: 0.2em solid transparent;
  text-align: center;
  border-bottom-color: #313131;
  background-image: linear-gradient(
    #313131 calc(50% - 0.1em),
    #313131 calc(50% + 0.1em)
  );
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 0.2em 0.2em;
  color: #999;

  &::before,
  &::after {
    display: block;
    position: absolute;
    height: 1em;
    line-height: 1em;
    width: 1em;
  }
  &::before {
    content: attr(before);
    left: -0.2em;
    text-align: left;
  }
  &::after {
    content: attr(after);
    top: 0;
    right: -0.2em;
    text-align: right;
  }

  &[orient="90deg"],
  &[orient="270deg"] {
    border-bottom-color: transparent;
    display: inline-block;
    width: 1em;
    height: 10.1em;
    line-height: 10.1em;
    vertical-align: top;
  }
  &[orient="90deg"] {
    border-bottom-color: transparent;
    border-left-color: #313131;
    background-position: center left;
    text-align: center;
    &::before {
      top: -0.2em;
      bottom: auto;
      left: 0.1em;
    }
    &::after {
      left: 0.1em;
      top: auto;
      bottom: -0.2em;
      right: 0;
      text-align: left;
    }
  }
  &[orient="180deg"] {
    border-bottom-color: transparent;
    border-top-color: #313131;
    background-position: top center;
    line-height: 1.4em;

    &::before {
      bottom: 0;
      left: auto;
      right: -0.2em;
      text-align: right;
    }
    &::after {
      bottom: 0;
      left: -0.2em;
      right: auto;
      text-align: left;
    }
  }
  &[orient="270deg"] {
    border-bottom-color: transparent;
    border-right-color: #313131;
    background-position: center right;
    text-align: center;
    &::before {
      bottom: -0.2em;
      top: auto;
      right: 0.1em;
      left: auto;
      text-align: right;
    }
    &::after {
      right: 0.1em;
      bottom: auto;
      top: -0.2em;
      left: auto;
      text-align: right;
    }
  }
}
</style>
