<template>
  <div id="app">
    <div class="admin">
      <adminHeader></adminHeader>
      <navigation class="admin__nav"></navigation>
      <main class="admin__main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.admin {
  display: grid;
  height: 100vh;

  grid-template-rows: $admin-header-height 1fr;
  grid-template-columns: $admin-nav-width 1fr;
  grid-template-areas:
    "header header"
    "nav main";
  &__nav {
    flex: 0 0 $admin-nav-width;
    grid-area: nav;
  }

  &__main {
    flex: 1;
    grid-area: main;
    padding: 24px;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    background-color: #f6f8fb;
  }
}
</style>
