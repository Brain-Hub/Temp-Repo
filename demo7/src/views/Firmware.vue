<template>
  <!--begin::Layout Builder Notice-->
  <div class="card mb-10">
    <div class="card-body d-flex align-items-center py-8">
      <!--begin::Icon-->
      <div
        class="d-flex h-80px w-80px flex-shrink-0 flex-center position-relative"
      >
        <span class="svg-icon svg-icon-primary position-absolute opacity-15">
          <inline-svg
            src="media/icons/duotune/abstract/abs051.svg"
            class="h-80px w-80px"
          />
        </span>
        <span class="svg-icon svg-icon-3x svg-icon-primary position-absolute">
          <inline-svg src="media/icons/duotune/coding/cod009.svg" />
        </span>
      </div>
      <!--end::Icon-->

      <!--begin::Description-->
      <div class="ms-6">
        <p>Choose your configuration and build to produce your package.</p>
        <p>
          Download your <code>.zip</code> files with the newest version of
          Rootero-Firmware.
        </p>
        <p>
          Flash your microcontrollers using <a href="#">Arduino IDE</a> or
          <a href="#">Arduino Cli</a>.
        </p>
      </div>
      <!--end::Description class="list-unstyled text-gray-600 fw-bold fs-6 p-0 m-0" -->
    </div>
  </div>
  <!--end::Layout Builder Notice-->

  <div class="card mb-10">
    <!--begin::Header-->
    <div class="card-header card-header-stretch">
      <ul
        class="nav nav-stretch nav-line-tabs fw-bold border-0"
        role="tablist"
        id="kt_layout_builder_tabs"
        ref="kt_layout_builder_tabs"
      >
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 0 }"
            data-bs-toggle="tab"
            @click="setActiveTab($event)"
            data-tab-index="0"
            href="#kt_builder_main"
            role="tab"
          >
            Configuration
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 1 }"
            data-bs-toggle="tab"
            @click="setActiveTab($event)"
            data-tab-index="1"
            href="#kt_builder_header"
            role="tab"
          >
            Communication
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 2 }"
            data-bs-toggle="tab"
            @click="setActiveTab($event)"
            data-tab-index="2"
            href="#kt_builder_subheader"
            role="tab"
          >
            Systems
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            :class="{ active: tabIndex === 3 }"
            data-bs-toggle="tab"
            @click="setActiveTab($event)"
            data-tab-index="3"
            href="#kt_builder_aside"
            role="tab"
          >
            Advanced
          </a>
        </li>
      </ul>
    </div>
    <!--end::Header-->

    <!--begin::Form-->
    <form class="form" id="kt_layout_builder_form" @submit="submit($event)">
      <!--begin::Body-->
      <div class="card-body">
        <div class="tab-content pt-3" id="kt_tabs">
          <div
            class="tab-pane"
            :class="{ active: tabIndex === 0 }"
            id="kt_builder_main"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Unit Id:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select
                  class="form-select form-select-solid"
                  v-model="config.loader.type"
                >
                  <option value="default"></option>
                </select>
                <div class="form-text text-muted">
                  Select Id from available.
                </div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Controller:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select class="form-select form-select-solid">
                  <option value="default"></option>
                </select>
                <div class="form-text text-muted">
                  Select Id from available.
                </div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Shield:</label>
              <div class="col-lg-9 col-xl-4">
                <select class="form-select form-select-solid">
                  <option value="default"></option>
                </select>
                <div class="form-text text-muted">
                  Select Id from available.
                </div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Sub-Environments:</label
              >
              <div class="col-lg-9 col-xl-4">
                <input
                  class="form-control form-control-solid"
                  value="4"
                  type="number"
                />
                <div class="form-text text-muted">
                  Select Id from available.
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane"
            :class="{ active: tabIndex === 1 }"
            id="kt_builder_header"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Wi-Fi Mode:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select class="form-select form-select-solid">
                  <option value="wifi-0"></option>
                  <option value="wifi-1">ESP8266 on Serial (AT)</option>
                  <option value="wifi-2">
                    ESP8266 on Serial (Rootero Firmware)
                  </option>
                  <option value="wifi-2">ESP Integrated</option>
                </select>
                <div class="form-text text-muted">
                  Select Wi-Fi Mode if available.
                </div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Radio Module:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select class="form-select form-select-solid">
                  <option value="rf-0"></option>
                  <option value="rf">RF - 433 Mhz</option>
                </select>
                <div class="form-text text-muted">
                  Select your Radio Module if available.
                </div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Bluetooth Mode:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select class="form-select form-select-solid">
                  <option value="bt-0"></option>
                  <option value="hc-05">HC-05</option>
                </select>
                <div class="form-text text-muted">
                  Select Bluetooth Module if available.
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane"
            :class="{ active: tabIndex === 2 }"
            id="kt_builder_subheader"
          ></div>

          <div
            class="tab-pane"
            :class="{ active: tabIndex === 3 }"
            id="kt_builder_aside"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Theme:</label>
              <div class="col-lg-9 col-xl-4">
                <select
                  class="form-select form-select-solid"
                  v-model="config.aside.theme"
                >
                  <option value="dark">Dark</option>
                  <option value="light">Light</option>
                </select>
                <div class="form-text text-muted">Set aside theme</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Menu Icon:</label
              >
              <div class="col-lg-9 col-xl-4">
                <select
                  class="form-select form-select-solid"
                  v-model="config.aside.menuIcon"
                >
                  <option value="svg">SVG Icon</option>
                  <option value="font">Font Icon</option>
                </select>
                <div class="form-text text-muted">Select menu icon type.</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Display:</label
              >
              <div class="col-lg-9 col-xl-4">
                <span class="switch switch-icon">
                  <input type="hidden" v-model="config.aside.display" />
                  <div
                    class="form-check form-check-custom form-check-solid form-switch mb-2"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="config.aside.display"
                    />
                  </div>
                </span>
                <div class="form-text text-muted">Display Aside</div>
              </div>
            </div>
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end"
                >Minimized:</label
              >
              <div class="col-lg-9 col-xl-4">
                <span class="switch switch-icon">
                  <input type="hidden" v-model="config.aside.minimized" />
                  <div
                    class="form-check form-check-custom form-check-solid form-switch mb-2"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      v-model="config.aside.minimized"
                    />
                  </div>
                </span>
                <div class="form-text text-muted">
                  Minimize secondary panel by default
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane"
            :class="{ active: tabIndex === 4 }"
            id="kt_builder_content"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div class="col-lg-9 col-xl-4">
                <select
                  class="form-select form-select-solid"
                  v-model="config.content.width"
                >
                  <option value="fluid">Fluid</option>
                  <option value="fixed">Fixed</option>
                </select>
                <div class="form-text text-muted">
                  Select layout width type.
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane"
            :class="{ active: tabIndex === 5 }"
            id="kt_builder_footer"
          >
            <div class="row mb-10">
              <label class="col-lg-3 col-form-label text-lg-end">Width:</label>
              <div class="col-lg-9 col-xl-4">
                <select
                  class="form-select form-select-solid"
                  v-model="config.footer.width"
                >
                  <option value="fluid">Fluid</option>
                  <option value="fixed">Fixed</option>
                </select>
                <div class="form-text text-muted">
                  Select layout width type.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end::Body-->

      <!--begin::Footer-->
      <div class="card-footer py-6">
        <div class="row">
          <div class="col-lg-3"></div>
          <div class="col-lg-9">
            <input
              type="hidden"
              id="kt_layout_builder_tab"
              name="layout-builder[tab]"
            />
            <input
              type="hidden"
              id="kt_layout_builder_action"
              name="layout-builder[action]"
            />

            <button
              type="submit"
              id="kt_layout_builder_preview"
              class="btn btn-primary me-2"
            >
              <span class="indicator-label"> Build </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <button
              @click="reset($event)"
              type="button"
              id="kt_layout_builder_reset"
              class="btn btn-active-light btn-color-muted fw-bold"
            >
              Download
            </button>
          </div>
        </div>
      </div>
      <!--end::Footer-->
    </form>
    <!--end::Form-->
  </div>

  <!--
  <div class="card">
    <div class="card-body p-10 p-lg-15">
      <h1 class="anchor fw-bolder mb-5" id="overview">Generated config</h1>
      <div class="py-5">
        This config is used as a <b>{{ themeName }}</b> layout config, you can
        update default values inside file
        <code>metronic/vue/theme/src/core/config/DefaultLayoutConfig.ts</code>
      </div>
      <CodeHighlighter lang="json">{{ config }}</CodeHighlighter>
    </div>
  </div>
  -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { config } from "@/core/helpers/config";
//import CodeHighlighter from "@/components/highlighters/CodeHighlighter.vue";
import { themeName } from "@/core/helpers/documentation";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "builder",
  components: {
    //CodeHighlighter,
  },

  setup() {
    const tabIndex = ref(0);

    onMounted(() => {
      // set the tab from previous
      tabIndex.value = parseInt(localStorage.getItem("builderTab") || "0");

      setCurrentPageTitle("Firmware Builder");
    });

    /**
     * Reset config
     * @param event
     */
    const reset = (event) => {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    };

    /**
     * Set active tab when the tab get clicked
     * @param event
     */
    const setActiveTab = (event) => {
      tabIndex.value = parseInt(event.target.getAttribute("data-tab-index"));
      // keep active tab
      localStorage.setItem("builderTab", tabIndex.value.toString());
    };

    /**
     * Submit form
     * @param event
     */
    const submit = (event) => {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(config.value));
      window.location.reload();
    };

    return {
      tabIndex,
      config,
      reset,
      setActiveTab,
      submit,
      themeName,
    };
  },
});
</script>
