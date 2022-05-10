<template>
  <KTModalCard
    title=""
    description="There are no users added yet. <br/>Start by adding your first users"
    button-text="Add User"
    modal-id="kt_modal_add_customer"
  ></KTModalCard>

  <AddCustomerModal></AddCustomerModal>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import KTModalCard from "@/components/cards/Card.vue";
import AddCustomerModal from "@/components/modals/forms/AddCustomerModal.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { getIllustrationsPath } from "@/core/helpers/assets";
import { useI18n } from "vue-i18n/index";

export default defineComponent({
  name: "getting-started",
  components: {
    KTModalCard,
    AddCustomerModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs(translate("users"), [
        translate("administration"),
      ]);
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
      getIllustrationsPath,
      translate,
    };
  },
});
</script>
