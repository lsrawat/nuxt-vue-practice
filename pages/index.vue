<template>
  <div>
    <the-model-selector :makes="makes" :models="models" @on-research="routeToMakePage($event)"></the-model-selector>
    <the-login/>
  </div>
</template>

<script>
import TheModelSelector from "@/components/home/TheModelSelector";
import TheLogin from "@/components/home/TheLogin";

export default {
  components: {
    TheModelSelector,
    TheLogin
  },
  data(){
    return {
      makes: [],
      models:[]
    }
  },
  async asyncData({ $axios }) {
    try {
      console.log("data call made");
      // console.log(axios);
      const makes = await $axios.$get("http://localhost:3004/makes");
      const models = await $axios.$get("http://localhost:3004/models");
      // console.log(data);
      return { makes, models };
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    routeToMakePage(makeModel) {
      console.log(makeModel);
      this.$router.push(`/${makeModel.selectedMake}/${makeModel.selectedModel}`);
    }
  }
};
</script>

<style>
</style>
