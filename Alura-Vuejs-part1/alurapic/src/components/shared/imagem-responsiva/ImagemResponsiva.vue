<template>
  <img class="imagem-responsiva" :src="url" :alt="titulo" />
</template>

<script>
export default {
  props: ["url", "titulo"],
};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
  height: 10rem;
  object-fit: cover;
}
</style>