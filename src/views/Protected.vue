<template lang="html">
  <div v-if="me">
    <h2>User's Info</h2>
    <p>ID: {{ me.id }}</p>
    <p>Name: {{ me.name }}</p>
    <p>Email: {{ me.email }}</p>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      me: null
    };
  },
  apollo: {
    me: gql`
      query {
        me {
          id
          name
          email
        }
      }
    `
  }
};
</script>

<style lang="css" scoped></style>
