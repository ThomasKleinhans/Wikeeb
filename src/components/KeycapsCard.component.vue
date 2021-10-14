<template>
    <q-card class="keycaps-card">
        <q-card-section class="flex items-center justify-between q-py-sm q-px-md">
            <span class="title">{{item.name}}</span>
            <q-btn flat round :color="isFavorite ? 'negative' : 'favorite'" :style="isFavorite ? '' : 'opacity:.3'" icon="favorite" @click="favorite()"/>
        </q-card-section>
        
        <q-img :src="imgURL">
            <div class="absolute-bottom">
                <q-chip size="12px" color="primary">
                    {{item.material}}
                </q-chip>
                <q-chip size="12px" color="secondary">
                    {{item.profile}}
                </q-chip>
                
                <q-space />

                <q-chip size="12px" :color="availabilityColor">
                    {{item.availability}}
                </q-chip>
            </div>
        </q-img>
    </q-card>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

    export default {
        props: {
            item: {
                type: Object,
            },
        },
        data() {
            return {
                imgURL: ""
            }
        },
        methods: {
            ...mapActions([
                "addKeycapsToFavorties"
            ]),
            getImage(){
                this.$store.$fb.getURLRessource(this.item.image).then((result)=>{
                    this.imgURL = result
                })
            },
            favorite(){
                if(this.getAuthStatus){
                    this.addKeycapsToFavorties({keycapsUID: this.item.id, userUID: this.getUserUID})
                }
                else{
                    this.$router.push({name: 'login'})
                }
            },
            
        },
        computed: { 
            ...mapGetters([
                "getAuthStatus",
                "getUserUID",
                "getFavoritesKeycaps"
            ]),
            availabilityColor() {
                switch (this.item.availability) {
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
            isFavorite(){
                return this.getFavoritesKeycaps.includes(this.item.id)
            }
        },
        mounted () {
            this.getImage();
        },
    }
</script>

<style lang="scss" scoped>

.keycaps-card{
    .q-card__section{
        background: #282E50;
    }

    .title{
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
    .q-img--menu{
            cursor: pointer;
            height: 250px;
        }
    .absolute-bottom{
        display: flex;
        background: none;
    }
}

</style>