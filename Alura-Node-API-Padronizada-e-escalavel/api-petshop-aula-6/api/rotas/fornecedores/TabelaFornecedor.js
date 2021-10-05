const Modelo = require("./ModeloTabelaFornecedor");
const NaoEncontrado = require("../../erros/NaoEncontrado");

module.exports = {
  listar() {
    return Modelo.findAll({ raw: true });
  },
  inserir(fornecedor) {
    return Modelo.create(fornecedor);
  },
  async pegarPorId(id) {
    // findOne, metodo do Sequelize
    const encontrado = await Modelo.findOne({
      //clausula para conseguir encontrar um fornecedor
      where: {
        id: id,
      },
    });

    if (!encontrado) {
      throw new NaoEncontrado();
    }

    return encontrado;
  },
  atualizar(id, dadosParaAtualizar) {
    return Modelo.update(dadosParaAtualizar, {
      where: { id: id },
    });
  },
  remover(id) {
    return Modelo.destroy({
      where: { id: id },
    });
  },
};
