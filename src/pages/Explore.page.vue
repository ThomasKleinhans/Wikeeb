<template>
  <q-page padding>
      <span v-for="(keycap, index) in getAllKeycaps" :key="index">{{keycap.name}}</span>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { useQuasar } from 'quasar'
import AddKeyboardModal from '../components/AddKeyboardModal.component.vue'

export default {
    computed: {
        ...mapGetters(['getAllKeycaps'])
    },
    methods:{
        ...mapActions([
            'getKeycapsFromDB'
        ]),
        openModal(){

            
        }
    },
    setup(){
        const $q = useQuasar()

        function addKeyboard(){
            $q.dialog({
                component: AddKeyboardModal,
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