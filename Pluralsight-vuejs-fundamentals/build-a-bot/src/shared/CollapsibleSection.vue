<template>
  <div>
    <button class="header" @click="open = !open">
      <span v-if="open">&#x25B2; Collapse</span>
      <span v-else>&#x25BC; Expand</span>
    </button>
    <slot v-if="open" />
  </div>
</template>

<script>
export default {
  name: 'CallapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>
.header {
  background-color: grey;
  padding: 3px;
  width: 100%;
  cursor: pointer;
}
</style>
