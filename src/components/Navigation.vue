<template>
  <div class="nav">
    <ul>
      <li><router-link :to="{ name: 'home' }">Designs</router-link></li>
      <li>
        <router-link :to="{ name: 'categories' }">Categories</router-link>
      </li>
      <li><router-link :to="{ name: 'settings' }">Settings</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss">
.nav {
  padding: 30px;
  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: $brand-color;
    }
  }
}
</style>
