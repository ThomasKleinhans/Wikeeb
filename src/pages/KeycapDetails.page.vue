<template>
  <q-page padding>
      <div class="fit row wrap justify-center items-start content-start">
        <div class="col-7">
        <q-card class="keycaps-card" v-if="currentItem">
            <q-item>
                <q-item-section>
                    <q-item-label>
                        <q-btn flat round icon="favorite" />
                        {{currentItem.name}}
                    </q-item-label>
                </q-item-section>
            </q-item>
            
            <q-card-section horizontal>
                    <q-img
                    :src="currentItem.image"
                    spinner-color="white"
                    />

                <q-card-section class="col-4">
                    <q-list>
                        <q-item clickable v-ripple v-for="link in currentItem.links" :key="link['prefix']" :href="link['link']" target="_blank">
                            <q-item-section avatar top>
                                <img :src="getIcon(link)">
                            </q-item-section>

                            <q-item-section>
                                <q-item-label lines="1">{{ link['prefix'] }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card-section>
            <q-card-section horizontal>
                <q-card-section class="col-4">
                    <q-chip size="12px" color="primary">
                        PBT
                    </q-chip>
                    <q-chip size="12px" color="secondary">
                        Cherry
                    </q-chip>
                </q-card-section>
            </q-card-section>

        </q-card>
        </div>
      </div>
  </q-page>
</template>

<script>
import KeycapConfig from "../config/keycaps.config.json";
import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                KeycapConfig,
                item: null,
                imgURL: null
            }
        },
        computed: {
            ...mapGetters([
            "getKeycapsById"
            ]),
            currentItem () {
                return this.$store.getters.getKeycapsById(this.$route.params.id)
            },
        },
        methods: {
            getIcon (item) {
                const temp = KeycapConfig.links.find(e => e.name == item.prefix)
                return require("../assets/icons/" + temp.icon)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>