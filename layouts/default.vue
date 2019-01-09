<template>
  <div>
    <TheHeader/>
    <main class="main-section">
      <nuxt/>
    </main>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.main-section {
  margin-top: 4.5rem;
}
body {
  font-family: "Lato", sans-serif;
}
</style>
