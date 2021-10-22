<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="text-white navbar">
      <q-toolbar class="q-py-sm q-px-md">
        <router-link :to="{ name: 'explore' }" class="text-white">
          <img id="logo" src="../assets/logo.svg" alt="" />
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
          <router-link :to="{ name: 'explore' }" class="text-white">
            Explore
          </router-link>
          <router-link :to="{ name: 'keycaps' }" class="text-white">
            Keycaps
          </router-link>
          <!-- <router-link :to="{ name: 'keyboards' }" class="text-white"> Keyboards </router-link> -->
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn @click="tryToAddKeyboard" color="primary">
            Add a keycap set
          </q-btn>

          <q-btn v-if="getAuthStatus" dense flat no-wrap>
            <q-icon name="person" size="30px" />
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu id="user-menu" auto-close>
              <q-list>
                <q-item
                  clickable
                  :to="{ name: 'favorite-keycaps' }"
                  class="GL__menu-link flex items-center row"
                >
                  <q-icon name="favorite" size="16px" class="q-mx-sm" />
                  <q-item-section>Keycaps</q-item-section>
                </q-item>
                <q-item
                  clickable
                  class="GL__menu-link flex items-center flex row"
                >
                  <q-icon
                    name="logout"
                    size="16px"
                    color="negative"
                    class="q-mx-sm"
                  />
                  <q-item-section @click="logoutUser" class="text-negative"
                    >Log out</q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn
            color="primary"
            class="log-button"
            v-else
            dense
            :to="{ name: 'login' }"
          >
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
import { mapGetters, mapActions } from "vuex";
import AddKeycapModalComponentVue from "src/components/AddKeycapModal.component.vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "MainLayout",
  computed: {
    ...mapGetters(["getAuthStatus"]),
  },
  methods: {
    ...mapActions(["logoutUser"]),
    tryToAddKeyboard() {
      if (this.getAuthStatus) {
        this.addKeyboard();
      } else {
        this.$router.push({ name: "login" });
      }
    },
  },
  setup() {
    const $q = useQuasar();

    function addKeyboard() {
      $q.dialog({
        component: AddKeycapModalComponentVue,
      })
        .onOk(() => {
        })
        .onCancel(() => {
        })
        .onDismiss(() => {
        });
    }
    return { addKeyboard };
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  background: #282e50;

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    &:hover {
      text-decoration: underline;
    }

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }
  .log-button {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  #logo {
    height: 45px;
  }
}
</style>
