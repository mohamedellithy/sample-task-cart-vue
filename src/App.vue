<template>
  <div id="app">
      <div class="container">
        <div class="row ">
            <router-view />
        </div>
      </div>
  </div>
</template>

<style lang="scss">
#app {
padding:50px 30px;
  color: #2c3e50;
}

#nav {
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
