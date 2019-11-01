<template>
  <header class="admin__header">
    <a href="#" class="logo">
      <img alt="Vue logo" src="@/assets/logo_storrbook.svg" />
    </a>
    <div class="toolbar">
      <div v-if="!me">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </div>

      <div v-if="me">
        <a href="#" @click.prevent="logout" >Logout</a>
        <a href="#" class="toolbar__user">
          <font-awesome-icon icon="user" />
          <span>{{ me.name }}</span>
          <font-awesome-icon icon="angle-down" />
        </a>
        <a href="#"><font-awesome-icon icon="bell"/></a>
      </div>

    </div>
  </header>
</template>

<script>
import gql from "graphql-tag";
import { onLogout } from "../vue-apollo.js";

export default {
  name: "adminHeader",
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
  },
  methods: {
    logout() {
      onLogout(this.$apollo.provider.defaultClient);
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="scss" scoped>
.admin__header {
  display: flex;
  flex-basis: 100%;
  grid-area: header;
  height: $admin-header-height;
  background-color: #fff;
  box-shadow: 0 1px 3px -2px rgba(0, 0, 0, 0.16);
  position: relative;
  .logo {
    min-width: $admin-nav-width;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.15);
    img {
      margin-top: 28px;
    }
  }
  .toolbar {
    width: 100%;
    a {
      display: block;
      float: right;
      align-items: center;
      width: 100px;
      border-left: 1px solid #e7e7e7;
      height: 100%;
    }
    svg {
      margin: 25px auto 0;
    }
    &__user {
      min-width: 180px;
      svg {
        margin-right: 12px;
        margin-left: 12px;
      }
    }
  }
}
</style>
