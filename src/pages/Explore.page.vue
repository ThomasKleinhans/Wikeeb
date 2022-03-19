<template>
  <q-page padding>
      <p>Thanks for trying our app which is still in development!</p>
      <p>You can access to our keycaps database and create an account to add some favorite items</p>
      <q-btn class="q-ma-md" href="https://wikeeb.featurebase.app/"  target="_blank" color="primary">Suggest a feature</q-btn>
      <q-btn class="q-ma-md" href="https://wikeeb.featurebase.app/roadmap" target="_blank" color="primary">Check our roadmap</q-btn>
      <p>If you want to join the team or just contact us : <a class="text-primary" href="mailto:contact@wikeeb.app" target="_blank">contact@wikeeb.app</a> </p>
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
