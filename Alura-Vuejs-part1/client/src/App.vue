<template>
  <div class="corpo">
    <meu-menu />
    <transition name="pagina">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Menu from "./components/shared/menu/Menu.vue";
export default {
  components: { "meu-menu": Menu },

  data() {
    return {};
  },
  created() {
    console.log(routes);
  },
};
</script>
<style>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  width: 96%;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}
.pagina-enter-active,
.pagina-leave {
  transition: 1s;
}
</style>
