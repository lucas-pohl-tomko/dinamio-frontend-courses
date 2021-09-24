import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/http'

Vue.use(Vuex);

const estado = {
    token: null,
    usuario: {}
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
        state.usuario = usuario;
        state.token = token;
    },
    DESLOGAR_USUARIO(state) {
        state.token = null;
        state.usuario = {};
    }
}

const actions = {
    efetuarLogin({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', usuario)
                .then(response => {
                    commit("DEFINIR_USUARIO_LOGADO", {
                        token: response.data.access_token,
                        usuario: response.data.user,
                    });
                    resolve(response.data);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    }
}

export default new Vuex.Store({
    state: estado,
    mutations: mutations,
    actions: actions,
});