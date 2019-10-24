<template>
  <div class="admin">
    <header class="admin__header">
      <a href="#" class="logo">
        <img alt="Vue logo" src="../assets/logo_storrbook.svg" />
      </a>
      <div class="toolbar">
        <a href="#"><i class="fa fa-bell"></i></a>
        <a href="#"><i class="fa fa-user"></i></a>
      </div>
    </header>
    <navigation class="admin__nav"></navigation>
    <main class="admin__main">
      <h2>Dashboard</h2>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
