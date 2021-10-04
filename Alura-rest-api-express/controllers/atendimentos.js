module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce esta na rota de atendimentos, realizando um get'))

    app.post('/atendimentos', (req, res) => res.send('voce esta na rota de atendimentos, realizando um post'))

}