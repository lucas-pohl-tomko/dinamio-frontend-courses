<template>
  <div class="container">
    <h1>Novo Usuário</h1>
    <form @submit.prevent="enviarFormulario" action="">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="usuario.nome" />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senhas</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nome: "",
        senha: "",
        email: "",
      },
    };
  },
  methods: {
    enviarFormulario() {
      console.log(this.usuario);
      this.$http
        .post("auth/register", this.usuario)
        .then((resposta) => {
          console.log(resposta);
          this.$router.push({ name: "login" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>