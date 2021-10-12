<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="text-white navbar"
    >
      <q-toolbar class="q-py-sm q-px-md">

        <img id="logo" src="../assets/logo.svg" alt="">

        <div
          v-if="$q.screen.gt.sm"
          class="
            GL__toolbar-link
            q-ml-xs q-gutter-xl
            text-body2 text-weight-bold
            row
            items-center
            no-wrap
          "
        >
          <router-link :to="{ name: 'explore' }" class="text-white"> Explore </router-link>
          <router-link :to="{ name: 'keycaps' }" class="text-white"> Keycaps </router-link>
          <router-link :to="{ name: 'keyboards' }" class="text-white"> Keyboards </router-link>
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn
            v-if="getAuthStatus"
            dense
            flat
            round
            size="sm"
            icon="add"
          />

          <q-btn v-if="getAuthStatus" dense flat no-wrap>
            <q-avatar rounded size="20px">
              <img src="https://cdn.quasar.dev/img/avatar3.jpg" />
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item clickable class="GL__menu-link">
                  <q-item-section @click="logoutUser" class="text-red">Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn v-else dense flat :to="{ name: 'login' }">
            <q-icon name="login" size="20px" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
  name: "MainLayout",
  computed: {
    ...mapGetters([
      "getAuthStatus"
    ]),
  },
  methods: {
    ...mapActions([
      'logoutUser',
    ])
  },
  updated () {
    console.log(this.getAuthStatus);
  },
});
</script>

<style lang="scss" scoped>
.navbar{

  background: #282E50;

  a{
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    &:hover{
      text-decoration: underline;
    }

    &.router-link-exact-active{
      text-decoration: underline;
    }
  }

  #logo{
    height: 45px;
  }

}

</style>
