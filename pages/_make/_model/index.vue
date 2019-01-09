<template>
  <div >
    <h2>{{articleData.title}}</h2>
    <p>{{mixinData}}</p>
    <p v-red-color-directive:color="'blue'">color directive</p>
    <p>{{compRevMessage}}</p>
    <p>{{amount | inr}}</p>
    <no-ssr placeholder="loading">asd</no-ssr>
    <button type="button" name="button" @click="changeMixinData()">Change mixin data</button>
  </div>

</template>
<script>

import testMixin from '@/mixins/test-mixin';
import RedColorDirective from '@/directives/red-color';
import inr from '@/filters/inr';

export default {
  mixins:[testMixin],
  directives: {
    RedColorDirective
  },
  middleware: "authentication",
  data(){
    return {mixinData:'in component',amount: 32}
  },
  computed:{
      compRevMessage() {
        return this.mixinData.split('').reverse().join('');
      }
  },
  mounted() {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js');
    document.body.appendChild(recaptchaScript);

    const meta = document.createElement("meta");
    meta.setAttribute("name", "author");
    meta.setAttribute("content", "Lakshit rawat");
    console.log(meta);
    document.head.appendChild(meta);

    console.log("process enironment", process.env.dev);
    // console.log(counter++);
  },
  watch:{
    mixinData(newMixinData, oldmixinData) {
      console.log(newMixinData);
      console.log("mixni data changed watch called");
    }
  },
  methods: {
    changeMixinData() {
      this.mixinData = "new mixin data";
    }
  },
  filters:{
    inr
  },
  async asyncData(ctx) {
    console.log(ctx);
    let api = ctx.isDev?process.env.dev:process.env.prod;
    console.log("api", api);
    let articleData = await ctx.$axios.$get(
      `http://localhost:3004/${ctx.params.make}/${ctx.params.model}`
    );
    console.log(articleData);
    return { articleData };
  }
};
</script>
<style scoped>
</style>
