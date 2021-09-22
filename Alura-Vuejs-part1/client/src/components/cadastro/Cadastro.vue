<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado"></h2>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input
          :value="foto.titulo"
          @input="foto.titulo = $event.target.value"
          id="titulo"
          autocomplete="off"
        />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input
          :value="foto.url"
          @input="foto.url = $event.target.value"
          id="url"
          autocomplete="off"
        />
        <imagem-responsiva />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          :value="foto.descricao"
          id="descricao"
          autocomplete="off"
          @input="foto.descricao = $event.target.value"
        ></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />
        <router-link to="/"
          ><meu-botao rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>


<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      foto: {
        titulo: "",
        url: "",
        descricao: "",
      },
    };
  },

  methods: {
    grava() {
      console.log(this.foto);

      this.foto = {
        titulo: "",
        url: "",
        descricao: "",
      };
    },
  },
};
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>