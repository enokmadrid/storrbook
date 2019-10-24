<template>
  <div id="app">
    <div class="admin">
      <header class="admin__header">
        <a href="#" class="logo">
          <img alt="Vue logo" src="@/assets/logo_storrbook.svg" />
        </a>
        <div class="toolbar">
          <a href="#"><font-awesome-icon icon="user"/></a>
          <a href="#"><font-awesome-icon icon="bell"/></a>
        </div>
      </header>
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
  &__header {
    display: flex;
    flex-basis: 100%;
    grid-area: header;
    height: $admin-header-height;
    background-color: #fff;
    box-shadow: 0 1px 3px -2px rgba(0, 0, 0, 0.16);
    position: relative;
  }
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

  .logo {
    width: $admin-nav-width - 1;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    box-shadow: 0 -2px 2px rgba(0, 0, 0, 0.15);
  }
}
</style>
