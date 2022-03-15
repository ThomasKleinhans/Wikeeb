<template>
  <q-page padding>
    <div class="row q-col-gutter-xl" v-if="getFavoriteKeycaps.length > 0">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" v-for="(keycap, index) in getFavoriteKeycaps" :key="index">
            <KeycapsCard :item="keycap"/>
        </div>
    </div>
    <div v-else>
        You never liked a keycap set. Press the like button.
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex';
import KeycapsCard from "../../components/KeycapsCard.component.vue"

export default {
    components: {
        KeycapsCard,
    },
    computed: {
        ...mapGetters([
            'getFavoriteKeycaps',
        ])
    },
};
</script>