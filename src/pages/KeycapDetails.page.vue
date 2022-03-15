<template>
  <q-page padding>
      <div class="fit row wrap justify-center items-start content-start">
        <div class="col-7">
        <q-card class="keycaps-details" v-if="currentItem">
            <q-item>
                <q-item-section>
                    <q-item-label>
                        <q-btn flat round @click="favorite()" :color="isFavorite ? 'negative' : 'favorite'" :style="isFavorite ? '' : 'opacity:.3'" icon="favorite" />
                        {{currentItem.name}}
                    </q-item-label>
                </q-item-section>
            </q-item>
            
            <q-card-section horizontal>
                <q-card-section class="col-8">
                    <q-img
                    :src="currentItem.image"
                    spinner-color="white"
                    width="100%"
                    />
                    <div class="row justify-between q-mt-md">
                        <div>
                            <q-chip size="12px" color="primary">
                                {{currentItem.material}}
                            </q-chip>
                            <q-chip size="12px" color="secondary">
                                {{currentItem.profile}}
                            </q-chip>
                        </div>
                        <div>
                            <q-chip size="12px" color="secondary">
                                {{currentItem.availability}}
                            </q-chip>
                        </div> 
                    </div>
                    
                </q-card-section>

                <q-card-section class="col-4">
                    <q-list>
                        <q-item clickable v-ripple v-for="link in currentItem.links" :key="link['prefix']" :href="link['link']" target="_blank">
                            <q-item-section class="justify-center icon" avatar top>
                                <img :src="getIcon(link)">
                            </q-item-section>

                            <q-item-section class="pl-0">
                                <q-item-label lines="1">{{ link['prefix'] }}</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card-section>
        </q-card>
        </div>
      </div>
  </q-page>
</template>

<script>
import KeycapConfig from "../config/keycaps.config.json";
import { mapGetters, mapActions } from 'vuex'

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
                "getAuthStatus",
                "getKeycapsById",
                "getFavoritesKeycaps",
                "getUserUID",
            ]),
            currentItem () {
                return this.$store.getters.getKeycapsById(this.$route.params.id)
            },
            isFavorite(){
                return this.getFavoritesKeycaps.includes(this.currentItem.id)
            },
            availabilityColor() {
                switch (this.currentItem.availability) {
                    case 'GB-Ended':
                    return "negative";

                    case 'GB-Live':
                    return "positive";

                    case 'GB-Upcoming':
                    return "warning";

                    case 'In-Stock':
                    return "positive";

                    case 'Interest Check':
                    return "info";

                    default :
                    return "dark";
                }
            },
        },
        methods: {
            ...mapActions([
                "addKeycapsToFavorties"
            ]),
            getIcon (item) {
                const temp = KeycapConfig.links.find(e => e.name == item.prefix)
                return require("../assets/icons/" + temp.icon)
            },
            favorite(){
                if(this.getAuthStatus){
                    this.addKeycapsToFavorties({keycapsUID: this.currentItem.id, userUID: this.getUserUID})
                }
                else{
                    this.$router.push({name: 'login'})
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
.keycaps-details{
    background: #282E50;
}
.icon{
    min-width: 0 !important;
}
</style>