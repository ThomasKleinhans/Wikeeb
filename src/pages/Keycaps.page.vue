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
                v-model="brandInput"
                multiple
                :options="brandOptions"
                label="Brand"
            />
        </div>
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="profileInput"
                multiple
                :options="profileOptions"
                label="Profile"
            />
        </div>
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="materialInput"
                multiple
                :options="materialOptions"
                label="Material"
            />
        </div>
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="availabilityInput"
                multiple
                :options="availabilityOptions"
                label="Availability"
            />
        </div>
        <div class="col">
            <q-select
                filled
                class="q-mx-xs"
                v-model="compatibilityInput"
                multiple
                :options="compatibilityOptions"
                label="Compatibility"
            />
        </div>
        <div class="col q-mx-xs">
            <q-btn color="primary" label="Filter" class="full-width" padding="md"/>
        </div>
      </div>
        <q-infinite-scroll class="row q-col-gutter-xl" @load="onload" :offset="250">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(keycap, index) in getAllKeycaps" :key="index">
                <KeycapsCard :item="keycap"/>
        </div>
        <template v-slot:loading>
            <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
            </div>
        </template>
    </q-infinite-scroll>
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
            brandOptions: [
                'GMK'
            ],
            profileOptions: [
                'Cherry',
                'DSS',
                'KAM',
                'KAT'
            ],
            compatibilityOptions: [
                'ISO-FR',
                'ISO-UK',
                'ANSI-US'
            ],
            materialOptions: [
                'ABS',
                'PBT' 
            ],
            availabilityOptions: [
                'GB-Live',
                'In-Stock' 
            ],
            brandInput: null,
            profileInput: null,
            compatibilityInput: null,
            materialInput: null,
            availabilityInput: null
        }
    },
    computed: {
        ...mapGetters(['getAllKeycaps'])
    },
    methods:{
        ...mapActions([
            'getInitalKeycapsFromDB',
            'getNextKeycapsFromDB'
        ]),
        onload(index, done){
            this.getNextKeycapsFromDB().then(() => done())
        }
    },
    mounted(){
        this.getInitalKeycapsFromDB()
    }
};
</script>

<style lang="scss" scoped>

</style>