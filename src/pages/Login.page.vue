<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          v-model="auth.email"
          filled
          type="email"
          label="Email"
          lazy-rules
        />

        <q-input
          v-model="auth.password"
          filled
          type="password"
          label="Mot de passe"
          lazy-rules
        />

        <div>
          <q-btn class="q-ma-xs full-width" label="Se connecter" type="submit" color="primary" />
          <q-btn class="q-ma-xs full-width" flat label="Créer un compte" :to="{ name:'register' }" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      auth: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    onSubmit() {
      this.loginUser(this.auth).then((path) => {
        this.$router.push(path)
      });
    },
  },
};
</script>
