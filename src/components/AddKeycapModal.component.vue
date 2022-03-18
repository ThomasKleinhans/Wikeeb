<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card style="width: 700px; max-width: 80vw" class="q-dialog-plugin">
      <q-card-section>
        <span class="text-h4 flex justify-center q-my-md"
          >Submit a new keycap set</span
        >
        <q-form class="q-gutter-md">
          <q-stepper
            v-model="step"
            ref="stepper"
            color="primary"
            animated
            flat
            alternative-labels
          >
            <q-step
              :name="1"
              title="Basic infos"
              icon="settings"
              :done="step > 1"
            >
              <q-input v-model="keycapToAdd.name" label="Name" />
              <q-select
                v-model="keycapToAdd.brand"
                :options="KeycapConfig.brand"
                label="Brand"
              />
              <q-select
                v-model="keycapToAdd.profile"
                :options="KeycapConfig.profile"
                label="Profile"
              />
              <q-select
                v-model="keycapToAdd.material"
                :options="KeycapConfig.material"
                label="Material"
              />
              <q-select
                v-model="keycapToAdd.compatibility"
                :options="KeycapConfig.compatibility"
                label="Compatibility"
                multiple
              />
              <q-select
                v-model="keycapToAdd.availability"
                :options="KeycapConfig.availability"
                label="Availability"
              />
              <q-input v-if="isGB" label="GB start date" v-model="keycapToAdd.gbStart" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="keycapToAdd.gbStart" >
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input v-if="isGB" label="GB end date" v-model="keycapToAdd.gbEnd" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="keycapToAdd.gbEnd">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-file
                v-model="filesImages"
                label="Upload image"
                multiple
                accept=".jpg, image/*"
                @rejected="onRejected"
              />
            </q-step>

            <q-step
              :name="2"
              title="More infos"
              icon="create_new_folder"
              :done="step > 2"
            >
              <div v-for="(link, index) in keycapToAdd.links" :key="index" class="flex">
                <q-select
                  v-model="keycapToAdd.links[index].prefix"
                  :options="filteredLinks"
                  class="q-mr-md"
                >
                  <template v-slot:prepend>
                    <q-icon name="language" />
                  </template>
                </q-select>
                <q-input class="col" v-model="keycapToAdd.links[index].link" label="URL" />
                <q-btn rounded flat color="primary" icon="close" @click="removeLink(index)" />
              </div>
              <div class="flex justify-center q-my-md">
                <q-btn round color="primary" icon="add" @click="addLink()" />
              </div>
            </q-step>

            <template v-slot:navigation>
              <q-stepper-navigation class="flex justify-end">
                <q-btn
                  v-if="step > 1"
                  flat
                  color="primary"
                  @click="previous()"
                  label="Back"
                  class="q-ml-sm"
                />
                <q-btn
                  @click="next()"
                  color="primary"
                  :label="step === 2 ? 'Finish' : 'Continue'"
                />
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import KeycapConfig from "../config/keycaps.config.json";
import { useQuasar } from "quasar";
import { ref } from "vue";
import FirebaseService from "../services/firebase";
import { date } from 'quasar'

export default {
  data() {
    return {
      KeycapConfig,
      keycapToAdd:{
        name: "",
        brand: "",
        profile: "",
        material: "",
        availability: "",
        compatibility: [],
        gbStart: "",
        gbEnd: "",
        image: "",
        links: [
          {
            prefix: "GeekHack",
            link: "",
          },
        ],
      },
    };
  },
  emits: [
    // REQUIRED
    "ok",
    "hide",
  ],
  setup() {
    const $q = useQuasar();

    return {
      step: ref(1),
      filesImages: ref(null),
      filesMaxSize: ref(null),
      filesMaxTotalSize: ref(null),
      filesMaxNumber: ref(null),

      onRejected(rejectedEntries) {
        // Notify plugin needs to be installed
        // https://quasar.dev/quasar-plugins/notify#Installation
        $q.notify({
          type: "negative",
          message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
        });
      },
    };
  },
  computed: {
    filteredLinks() {
      return this.KeycapConfig.links.map(e => e.name)
    },
    isGB() {
      return this.keycapToAdd.availability.startsWith('GB')
    }
  },
  methods: {
    // following method is REQUIRED
    // (don't change its name --> "show")
    next() {
      if (this.step == 2) {
        this.onOKClick();
      } else {
        this.step++;
      }
    },
    addLink(){
      this.keycapToAdd.links.push({
            prefix: "",
            link: "",
      })
    },
    removeLink(index){
      this.keycapToAdd.links.splice(index, 1)
    },
    previous() {
      this.step--;
    },
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
      this.uploadImg();

      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },
    onCancelClick() {
      // we just need to hide the dialog
      this.hide();
    },
    uploadImg() {
      const MAX_WIDTH = 1000;
      const MAX_HEIGHT = 500;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.7;

      const blobURL = URL.createObjectURL(this.filesImages[0]);
      const img = new Image();
      img.src = blobURL;

      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.error("Cannot load image");
      };

      img.onload = () => {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = this.calculateSize(
          img,
          MAX_WIDTH,
          MAX_HEIGHT
        );
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          (blob) => {
            FirebaseService.putImageToStorage(
              "keycaps/" + this.filesImages[0].name,
              blob
            )
              .then((response) => {
                FirebaseService.getURLRessource(response.metadata.fullPath).then((result)=>{
                  this.keycapToAdd.image = result
                  FirebaseService.pushItemToCollection("keycaps", this.keycapToAdd)
                })
              })
              .catch((err) => {
                console.error(err);
              });
          },
          MIME_TYPE,
          QUALITY
        );
      }
    },
    calculateSize(img, maxWidth, maxHeight) {
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
