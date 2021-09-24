<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin" action="">
      <div class="form-group">
        <label for="email"></label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="senha"></label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button type="submit" class="btn btn-primary brn-block">Logar</button>
      <router-link :to="{ name: 'novo.usuario' }"> Cadastre-se </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {},
    };
  },
  methods: {
    efetuarLogin() {
      this.$http
        .post("auth/login", this.usuario)
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.access_token);
          this.$router.push({ name: "gerentes" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>