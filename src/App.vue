<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue'
import { createMetaMixin } from 'quasar'

export default defineComponent({
  name: 'App',
   mixins: [
    createMetaMixin(function () {
      // "this" here refers to your component
      return {
        // assuming `this.myTitle` exists in your mixed in component
        title: 'Wikeeb | Keyboard wiki'
      }
    })
  ]
})
</script>
