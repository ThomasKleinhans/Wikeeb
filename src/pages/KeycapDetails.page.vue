<template>
  <q-page padding>
    <img :src="require('../assets/'+img)" alt="">
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        props: {
            img:{
                type: String,
                default: 'logo.svg'
            }
        },
        data() {
            return {
                item: null
            }
        },
        computed: {
            ...mapGetters([
            "getKeycapsById"
            ])
        },
        mounted () {
            this.item = this.getKeycapsById(this.$route.params.id)
        },
        methods: {
            getImgUrl(pic) {
                return 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>