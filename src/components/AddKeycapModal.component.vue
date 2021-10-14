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
          <q-file
            v-model="filesImages"
            filled
            label="Upload image"
            multiple
            accept=".jpg, image/*"
            @rejected="onRejected"
          />
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
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import FirebaseService from "../services/firebase"

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
  setup () {
    const $q = useQuasar()

    return {
      filesImages: ref(null),
      filesMaxSize: ref(null),
      filesMaxTotalSize: ref(null),
      filesMaxNumber: ref(null),

      onRejected (rejectedEntries) {
        // Notify plugin needs to be installed
        // https://quasar.dev/quasar-plugins/notify#Installation
        $q.notify({
          type: 'negative',
          message: `${rejectedEntries.length} file(s) did not pass validation constraints`
        })
      }
    }
  },
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
      this.uploadImg()
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide the dialog
      this.hide();
    },
    uploadImg(){
      const MAX_WIDTH = 1000;
      const MAX_HEIGHT = 500;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.7;

      const blobURL = URL.createObjectURL(this.filesImages[0])
      const img = new Image()
      img.src = blobURL

      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        // Handle the failure properly
        console.error("Cannot load image");
      };

      img.onload = () => {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = this.calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          (blob) => {
            FirebaseService.putImageToStorage("keycaps/" + this.filesImages[0].name , blob)
            .then(() => {
              console.log("Image uploaded to Firebase Storage")
            })
            .catch((err) =>{
              console.error(err)
            })
          },
          MIME_TYPE,
          QUALITY
        );
      }
    },
    calculateSize(img, maxWidth, maxHeight){
      let width = img.width;
      let height = img.height;

      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    },
  },
};
</script>