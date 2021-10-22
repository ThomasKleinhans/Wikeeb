<template>
  <q-page padding>

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
    }
};
</script>

<style lang="scss" scoped>

</style>