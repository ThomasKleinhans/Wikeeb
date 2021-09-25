<template>
  <q-page padding>
      <div class="row">
        <div class="col">
            <q-input 
                class="q-mr-xs"
                filled 
                bottom-slots 
                label="GMK Dots, ePBT Be the one">

                <template v-slot:prepend>
                <q-icon name="search" />
                </template>
            </q-input>
        </div>
        
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="multiple"
                multiple
                :options="options"
                label="Brand"
            />
        </div>
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="multiple"
                multiple
                :options="options"
                label="Profile"
            />
        </div>
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="multiple"
                multiple
                :options="options"
                label="Material"
            />
        </div>
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="multiple"
                multiple
                :options="options"
                label="Availability"
            />
        </div>
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="multiple"
                multiple
                :options="options"
                label="Compatibility"
            />
        </div>
        <div class="col q-mx-xs">
            <q-btn color="primary" label="Filter" class="full-width" padding="md"/>
        </div>
      </div>
      <div class="row q-col-gutter-xl">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(keycap, index) in getAllKeycaps" :key="index">
                <KeycapsCard :item="keycap"/>
          </div>
      </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import KeycapsCard from "../components/KeycapsCard.component.vue"

export default {
    components: {
        KeycapsCard,
    },
    data() {
        return {
            options: [
                'GMK'
            ],
            multiple: null
        }
    },
    computed: {
        ...mapGetters(['getAllKeycaps'])
    },
    methods:{
        ...mapActions([
            'getKeycapsFromDB'
        ])
    },
    mounted(){
        this.getKeycapsFromDB()
    }
};
</script>

<style lang="scss" scoped>

</style>