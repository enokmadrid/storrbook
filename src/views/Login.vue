<template lang="html">
  <div>

    <ApolloMutation
      :mutation="require('../graphql/mutations/Login.gql')"
      :variables="{username, password}"
      @done="onDone"
    >
      <template v-slot="{mutate}">
        <form @submit.prevent=" mutate()">
          <div>
            <input
              type="email"
              name="username"
              v-model="username"
              id="username"
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              v-model="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button @click="mutate()">Login</button>
          </div>
        </form>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
// import gql from "graphql-tag";
import { onLogin } from "../vue-apollo.js";

export default {
  data() {
    return {
      username: "",
      password: "",
      access_token: ""
    };
  },
  methods: {
    onDone(val) {
      this.access_token = val.data.login.access_token;

      //save to local storage
      onLogin(this.$apollo.provider.defaultClient, this.access_token);
      this.$router.push("/categories");
    }
  }
};
</script>
