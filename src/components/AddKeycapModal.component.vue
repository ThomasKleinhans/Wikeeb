<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <span class="text-h4">Submit a new keycap set</span>
        <q-form class="q-gutter-md">
          <q-input v-model="keycapName" label="Name" />
          <q-select v-model="keycapBrand" :options="KeycapConfig.brand" label="Brand" />
          <q-select v-model="keycapProfile" :options="KeycapConfig.profile" label="Profile" />
          <q-select v-model="keycapMaterial" :options="KeycapConfig.material" label="Material" />
        </q-form>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="negative" label="Cancel" @click="onCancelClick" />
        <q-btn color="positive" label="OK" @click="onOKClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import KeycapConfig from "../config/keycaps.config.json"

export default {
  data() {
    return {
      KeycapConfig,
      keycapName: "",
      keycapBrand: "",
      keycapProfile: "",
      keycapMaterial: ""
    };
  },
  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],

  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide the dialog
      this.hide();
    },
  },
};
</script>