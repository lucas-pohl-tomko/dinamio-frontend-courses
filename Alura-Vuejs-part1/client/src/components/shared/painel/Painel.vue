<template>
  <div class="painel">
    <h2 class="painel-titulo" v-on:dblclick="visivel = !visivel">
      {{ titulo }}
    </h2>
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titulo"],
  data() {
    return {
      visivel: true,
    };
  },
};
</script>

<style scoped>
/* estilo do painel */

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 0.1rem;
  background: lightblue;
  margin: 0 0 0.5rem 0;
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 1rem;

  /* cut text if breaks line */
  overflow: hidden;
  white-space: nowrap; /* Don't forget this one */
  text-overflow: ellipsis;
}

.painel {
  box-shadow: 1px 2px 2px 1px;
}

.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.2s;
}

.painel-conteudo {
  overflow: hidden;
}
</style>
