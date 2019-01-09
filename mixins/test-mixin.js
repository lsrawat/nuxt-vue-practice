const testMixin = {
  created() {
    console.log('test mixin created');
  },
  mounted() {
    console.log("test mixin mounted");
  },
  data() {
    return {
      mixinData:'in mixin'
    }
  }
}

export default testMixin;
