const roteador = require("express").Router({ mergeParams: true });
const Tabela = require("./TabelaProduto");
const Produto = require("./Produto");

roteador.get("/", async (requisicao, resposta) => {
  const produtos = await Tabela.listar(requisicao.fornecedor.id);
  resposta.send(JSON.stringify(produtos));
});

roteador.post("/", async (requisicao, resposta, proximo) => {
  try {
    const idFornecedor = requisicao.fornecedor.id;
    const corpo = requisicao.body;
    const dados = Object.assign({}, corpo, { fornecedor: idFornecedor });
    const produto = new Produto(dados);
    await produto.criar();
    resposta.status(201);
    resposta.send(produto);
  } catch (erro) {
    proximo(erro);
  }
});

roteador.delete("/:id", async (requisicao, resposta) => {
  //obter todas as informacoes do produto que a gente tem agora e instanciar a classe para poder trabalhar o produto
  const dados = {
    id: requisicao.params.id,
    fornecedor: requisicao.fornecedor.id,
  };

  const produto = new Produto(dados);
  await produto.apagar();
  resposta.status(204);
  resposta.end();
});

module.exports = roteador;
