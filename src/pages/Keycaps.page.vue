<template>
  <q-page padding>
    <div class="row q-mb-md">
      <div class="col">
        <q-select
          filled
          class="q-mr-xs"
          clearable
          v-model="filters.brand"
          :options="brandOptions"
          label="Brand"
        />
      </div>
      <div class="col">
        <q-select
          filled
          class="q-mx-xs"
          clearable 
          v-model="filters.profile"
          :options="profileOptions"
          label="Profile"
        />
      </div>
      <div class="col">
        <q-select
          filled
          class="q-mx-xs"
          clearable 
          v-model="filters.material"
          :options="materialOptions"
          label="Material"
        />
      </div>
      <div class="col">
        <q-select
          filled
          class="q-mx-xs"
          clearable 
          v-model="filters.availability"
          :options="availabilityOptions"
          label="Availability"
        />
      </div>
      <div class="col">
        <q-select
          filled
          class="q-mx-xs"
          clearable 
          v-model="filters.compatibility"
          :options="compatibilityOptions"
          label="Compatibility"
        />
      </div>
      <div class="col q-ml-xs">
        <q-btn color="primary" @click="fetchFilteredKeycaps(filters)" label="Filter" class="full-width" padding="md" />
      </div>
    </div>
    <div class="row q-col-gutter-xl">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
        v-for="keycap in keycapsToShow"
        :key="keycap.id"
      >
        <KeycapsCard :item="keycap" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import KeycapsCard from "../components/KeycapsCard.component.vue";

export default {
  components: {
    KeycapsCard,
  },
  data() {
    return {
      brandOptions: ["GMK"],
      profileOptions: ["Cherry", "DSS", "KAM", "KAT"],
      compatibilityOptions: ["ISO-FR", "ISO-UK", "ANSI-US"],
      materialOptions: ["ABS", "PBT"],
      availabilityOptions: ["GB-Live", "GB-Ended", "In-Stock"],
      filters :{
        brand: [],
        profile: [],
        compatibility: [],
        material: [],
        availability:[]
      }
    };
  },
  computed: {
    ...mapGetters([
      "getAllKeycaps",
      "getFilteredKeycaps"
    ]),
    keycapsToShow(){
      if(this.getFilteredKeycaps.length > 0){
        return this.getFilteredKeycaps
      }
      return this.getAllKeycaps
    }
  },
  methods: {
    ...mapActions([
      'fetchFilteredKeycaps',
    ])
  },
};
</script>
