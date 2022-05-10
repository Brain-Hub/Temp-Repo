/* eslint-disable prettier/prettier */
<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xxl-8">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >{{ box.name }}</a
                >
                <a href="#">
                  <span v-if="!flags" class="svg-icon svg-icon-1 svg-icon-primary">
                    <inline-svg src="media/icons/duotune/general/gen026.svg" />
                  </span>
                  <span v-else class="svg-icon svg-icon-2 svg-icon-warning">
                    <inline-svg src="media/icons/duotune/general/gen042.svg" />
                  </span>
                </a>
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="media/icons/duotune/coding/cod007.svg" />
                  </span>
                  {{ box.id }}
                </a>
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
            <!--begin::Buttons
              <a
                href="#"
                class="btn btn-sm btn-light me-2"
                id="kt_user_follow_button"
              >
                <span class="svg-icon svg-icon-3 d-none">
                  <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                </span>
                Follow
              </a>

              <a
                href="#"
                class="btn btn-sm btn-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_offer_a_deal"
                >Hire Me</a
              >
              end::Buttons-->
              <!--begin::Menu-->
              <div class="me-0">
                <button
                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <i class="bi bi-three-dots fs-3"></i>
                </button>
                <Dropdown3></Dropdown3>
              </div>
              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <div class="d-flex flex-wrap">
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <div class="d-flex align-items-center">
                    <span class="mr-4">
                      <span class="svg-icon svg-icon-primary svg-icon-3x"
                        ><svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <path
                              d="M5,4 L19,4 C19.5522847,4 20,4.44771525 20,5 L20,19 C20,19.5522847 19.5522847,20 19,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,5 C4,4.44771525 4.44771525,4 5,4 Z M9,7 C8.44771525,7 8,7.44771525 8,8 L8,11 C8,11.5522847 8.44771525,12 9,12 C9.55228475,12 10,11.5522847 10,11 L10,8 C10,7.44771525 9.55228475,7 9,7 Z M12,15 C11.1715729,15 10.5,15.6715729 10.5,16.5 L10.5,18 L13.5,18 L13.5,16.5 C13.5,15.6715729 12.8284271,15 12,15 Z M15,7 C14.4477153,7 14,7.44771525 14,8 L14,11 C14,11.5522847 14.4477153,12 15,12 C15.5522847,12 16,11.5522847 16,11 L16,8 C16,7.44771525 15.5522847,7 15,7 Z"
                              fill="#000000"
                            />
                          </g>
                        </svg>
                      </span>
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="4500"
                      data-kt-countup-prefix="$"
                    >
                      {{ "0" }} kW/h
                    </div>
                  </div>
                  <div class="fw-bold fs-6 text-gray-400">
                    Energy Consumption
                  </div>
                </div>
              </div>
            </div>
            end::Wrapper-->

            <!--begin::Progress5
            <div
              class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3"
            >
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-bold fs-6 text-gray-400"
                  >Profile Compleation</span
                >
                <span class="fw-bolder fs-6">50%</span>
              </div>

              <div class="h-5px mx-3 w-100 bg-light mb-3">
                <div
                  class="bg-success rounded h-5px"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            end::Progress-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap"
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              :to="'/box/units?id=' + box.id"
              active-class="active"
            >
              Units
              <span class="fs-7 ms-1"
                >({{ box.unit.items.length - flags }}/{{
                  box.unit.items.length
                }})</span
              >
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              :to="'/box/campaigns?id=' + box.id"
              active-class="active"
            >
              Statistics
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="'/box/overview?id=' + box.id"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Cofiguration
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              :to="'/box/documents?id=' + box.id"
              active-class="active"
            >
              Documents
            </router-link>
          </li>end::Nav item-->
          <!--begin::Nav item
          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              :to="'/box/connections?id=' + box.id"
              active-class="active"
            >
              Connections
            </router-link>
          </li>end::Nav item-->
          <!--begin::Nav item          <li class="nav-item">
            <router-link
              class="nav-link text-active-primary me-6"
              :to="'/box/activity?id=' + box.id"
              active-class="active"
            >
              Advanced
            </router-link>
          </li>
          end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import { useRoute } from "vue-router";
import { Boxes } from "@/core/helpers/box";
import { useI18n } from "vue-i18n/index";
import { boolean } from "yup/lib/locale";

export default defineComponent({
  name: "profile",
  components: {
    Dropdown3,
  },
  setup() {
    const { t, te } = useI18n();
    const route = useRoute();

    var box = computed(() => {
      var box_ = {};
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
    var flags = computed(() => {
      var box_ = {};
      var flag = 0;
      try {
        Boxes.value.data.listBoxes.items.find(
          (element) => element.id == route.query.id
        ).unit.items.forEach(
          unit => {
            if(unit.status){
              if(Date.now() > Date.parse(unit.status.createdAt) + 10000){
                flag = flag + 1;
            }
            }
           });
        return flag;
      } catch (err) {
        return false;
      } finally {
        //console.log(box_);
      }
    });

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    return {
      translate,
      box,
      flags,
      route,
      Boxes,
    };
  },
});
</script>
