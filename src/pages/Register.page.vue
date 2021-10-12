<template>
  <q-page class="justify-center flex full-width" padding>
    <div class="q-pa-md" style="width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">  
        <q-input
          v-model="auth.name"
          filled
          type="text"
          label="Name"
          lazy-rules
        />
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
          label="Password"
          lazy-rules
        />

        <q-input
          v-model="auth.confirmPassword"
          filled
          type="password"
          label="Confirm password"
          lazy-rules
        />

        <div>
          <q-btn class="q-ma-xs full-width" label="Register" type="submit" color="primary" />
          <q-btn flat class="q-ma-xs full-width" label="Log in" :to="{ name:'login' }" color="primary" />
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
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
    };
  },
  methods: {
    ...mapActions(["registerUser"]),
    onSubmit() {
      this.registerUser(this.auth).then((path) => {
        this.$router.push(path)
      });
    },
  },
};
</script>
