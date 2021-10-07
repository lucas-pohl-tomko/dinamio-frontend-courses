const Modelo = require("./ModeloTabelaProduto");

module.exports = {
  listar(idFornecedor) {
    return Modelo.findAll({
      where: {
        fornecedor: idFornecedor,
      },
    });
  },
  inserir(dados) {
    return Modelo.create(dados);
  },
  /* Retornando uma chamada de uma funcao do sequelize para remover o produto,
  passando um objeto (where) que vai determinar qual o produto a ser removido */
  remover(idProduto, idFornecedor) {
    return Modelo.destroy({
      where: {
        id: idProduto,
        fornecedor: idFornecedor,
      },
    });
  },
};
