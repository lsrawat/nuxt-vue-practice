<template>
  <div>
    <the-header/>
    <the-header-about/>
    <main class="main-section-about">
      <nuxt/>
    </main>
  </div>
</template>
<script>
import TheHeader from "@/components/TheHeader/TheHeader";
import TheHeaderAbout from "@/components/TheHeader/TheHeaderAbout";

export default {
  components: {
    TheHeader,
    TheHeaderAbout
  }
};
</script>
<style>
.main-section-about {
  margin-top: 6.5rem;
}
</style>

