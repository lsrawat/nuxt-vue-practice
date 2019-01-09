<template>
  <section>
    <select v-model="selectedMake" @change="onMakeSelect($event)">
      <option disabled value>Select Make</option>
      <option v-for="(make, index) in makes" :key="index" :value="make.value">{{make.title}}</option>
    </select>
    <select
      v-model="selectedModel"
      :disabled="modelsInView.length === 0"
    >
      <option disabled value>Select Model</option>
      <option
        v-for="(model, index) in modelsInView"
        :key="index"
        :value="model.value"
      >{{model.title}}</option>
    </select>
    <button @click="onResearch()">Research</button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      selectedMake: "",
      selectedModel: "",
      modelsInView: []
    };
  },
  props: {
    makes: {
      type: Array,
      required: true
    },
    models: {
      type: Array,
      required: true
    }
  },
  methods: {
    onMakeSelect(event) {
      console.log(event);
      console.log(this.selectedMake);
      this.modelsInView = this.models.find(
        item => item.make === this.selectedMake
      ).models;
    },
    onResearch() {
      this.$emit("on-research", {
        selectedMake: this.selectedMake,
        selectedModel: this.selectedModel
      });
    }
  }
};
</script>
<style scoped>
</style>
