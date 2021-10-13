<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="text-white navbar"
    >
      <q-toolbar class="q-py-sm q-px-md">
        <router-link :to="{ name: 'explore' }" class="text-white">
          <img id="logo" src="../assets/logo.svg" alt=""> 
        </router-link>

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
          <!-- <router-link :to="{ name: 'keyboards' }" class="text-white"> Keyboards </router-link> -->
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">

          <q-btn v-if="getAuthStatus" dense flat no-wrap>
            <q-icon name="person" size="30px" />
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu  auto-close>
              <q-list style="min-width: 100px" dense>
                <q-item clickable class="GL__menu-link">
                  <q-item-section @click="logoutUser" class="text-negative">Log out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn color="primary" class="log-button" v-else dense :to="{ name: 'login' }">
            <q-icon name="person" size="25px" />
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

  .q-menu{
    max-width: 100px !important;
  }

}

</style>
