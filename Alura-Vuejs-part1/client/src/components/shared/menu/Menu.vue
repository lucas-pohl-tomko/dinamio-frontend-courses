<template>
  <nav>
    <ul>
      <li v-for="rota of routes" :key="rota.name">
        <router-link :to="rota.path ? rota.path : '/'">
          {{ rota.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { routes } from "../../../routes";
export default {
  data() {
    return {
      routes: routes.filter((route) => route.menu),
    };
  },
  created() {
    console.log(routes);
  },
};
</script>

<style>
</style>