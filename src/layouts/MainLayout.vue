<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="text-white"
    >
      <q-toolbar class="q-py-sm q-px-md">
        <div
          v-if="$q.screen.gt.sm"
          class="
            GL__toolbar-link
            q-ml-xs q-gutter-md
            text-body2 text-weight-bold
            row
            items-center
            no-wrap
          "
        >
          <a href="javascript:void(0)" class="text-white text-uppercase"> Explore </a>
          <a href="javascript:void(0)" class="text-white text-uppercase"> Keyboards </a>
          <a href="javascript:void(0)" class="text-white text-uppercase"> Keycaps </a>
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
