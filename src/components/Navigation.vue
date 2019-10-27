<template>
  <div class="nav">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">
          <font-awesome-icon icon="book-open" class="icon" /> Designs
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'categories' }">
          <font-awesome-icon icon="bookmark" class="icon" /> Categories
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'settings' }">
          <font-awesome-icon icon="cog" class="icon" /> Settings
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style lang="scss">
.admin__nav {
  a {
    display: block;
    padding: 12px 24px;
    text-align: left;
    .icon {
      margin-right: 12px;
    }
    &.router-link-exact-active {
      background: #f7f7f7;
      border-left: 4px solid $brand-color;
      padding-left: 20px;
    }
  }
}
</style>
