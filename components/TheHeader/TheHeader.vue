<template>
  <header class="main-header">
    <nav class="main-nav">
      <ul class="nav-links">
        <nuxt-link tag="li" to="/" class="nav-link"><a>Home</a></nuxt-link>
        <nuxt-link tag="li" to="/about" class="nav-link"><a>About</a></nuxt-link>
      </ul>
    </nav>

  </header>
</template>
<style scoped>
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #022d30;
    height: 4.5rem;
  }

  .main-nav {
    height: 100%;
  }

  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-link{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    margin: 0 1rem;
  }

  .nav-link a{
    display: block;
    text-decoration: none;
    color: white;
  }

  .nav-link.nuxt-link-exact-active {
    border-bottom: 3px solid #06c4d1;
  }

  .nav-link a:hover,
  .nav-link.nuxt-link-exact-active a{
    color: #06c4d1;
  }

  .nuxt-link-active{

  }
</style>

