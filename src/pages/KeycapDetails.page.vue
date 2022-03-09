<template>
  <q-page padding>
      <div class="fit row wrap justify-center items-start content-start">
        <div class="col-7">
        <q-card class="keycaps-card" v-if="item">
            <q-item>
                <q-item-section>
                    <q-item-label>
                        <q-btn flat round icon="favorite" />
                        {{item.name}}
                    </q-item-label>
                </q-item-section>
            </q-item>
            
            <q-card-section horizontal>
                    <q-img
                    src="https://firebasestorage.googleapis.com/v0/b/dev-wikeeb.appspot.com/o/keycaps%2F9o18y7J.jpg?alt=media&token=ffb84685-f816-4d32-9f90-a9ba5585f1d5"
                    spinner-color="white"
                    />

                <q-card-section class="col-4">
                    <q-list>
                        <q-item clickable v-ripple>
                            <q-item-section avatar top>
                                <q-avatar icon="folder" color="primary" text-color="white" />
                            </q-item-section>

                            <q-item-section>
                                <q-item-label lines="1">Geekhack</q-item-label>
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
            {{ $route.params.id }}
        </div>
      </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
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
    }
</script>

<style lang="scss" scoped>

</style>