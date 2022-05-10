<template>
  <KTModalCard
    title=""
    description="There are no knowledge articles added yet. <br/>Start your library by adding your first article."
    button-text="Add Article"
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
      setCurrentPageBreadcrumbs(translate("knowledge"), [
        translate("operation"),
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
