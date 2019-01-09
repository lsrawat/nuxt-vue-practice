import Vue from 'vue';
export default {
  bind(el, binding, vNode) {
    console.log(el);
    console.log(binding);
    console.log(vNode);
    el.style.color = binding.value;
  }
}
