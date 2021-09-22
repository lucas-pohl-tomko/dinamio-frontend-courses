<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/cadastro">Cadastro</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["rotas"],
  data() {
    return {};
  },
};
</script>

<style>
</style>