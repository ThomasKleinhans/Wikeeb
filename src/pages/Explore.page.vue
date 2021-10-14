<template>
  <q-page padding>
      <button @click="addKeyboard">Add a keyboard</button>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useQuasar } from 'quasar'
import AddKeyboardModalComponentVue from 'src/components/AddKeyboardModal.component.vue'
import AddKeycapModalComponentVue from 'src/components/AddKeycapModal.component.vue'

export default {
    computed: {
        ...mapGetters(['getAllKeycaps'])
    },
    methods:{
        ...mapActions([
            'getKeycapsFromDB'
        ])
    },
    setup(){
        const $q = useQuasar()

        function addKeyboard(){
            $q.dialog({
                component: AddKeycapModalComponentVue,
            }).onOk(() => {
                console.log('OK')
            }).onCancel(() => {
                console.log('Cancel')
            }).onDismiss(() => {
                console.log('Called on OK or Cancel')
            })
        }
        return {addKeyboard}
    },
    mounted(){
        this.getKeycapsFromDB()
    }
};
</script>

<style lang="scss" scoped>

</style>