<template>
  <q-page padding>
      <span v-for="(keycap, index) in getAllKeycaps" :key="index">{{keycap.name}}</span>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
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