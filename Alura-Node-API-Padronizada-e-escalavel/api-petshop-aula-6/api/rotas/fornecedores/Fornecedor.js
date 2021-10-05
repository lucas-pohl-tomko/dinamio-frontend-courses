const TabelaFornecedor = require("./TabelaFornecedor");
const CampoInvalido = require("../../erros/CampoInvalido");
const DadosNaoFornecidos = require("../../erros/DadosNaoFornecidos");

class Fornecedor {
  constructor({
    id,
    empresa,
    email,
    categoria,
    dataCriacao,
    dataAtualizacao,
    versao,
  }) {
    this.id = id;
    this.empresa = empresa;
    this.email = email;
    this.categoria = categoria;
    this.dataCriacao = dataCriacao;
    this.dataAtualizacao = dataAtualizacao;
    this.versao = versao;
  }

  async criar() {
    this.validar();
    const resultado = await TabelaFornecedor.inserir({
      empresa: this.empresa,
      email: this.email,
      categoria: this.categoria,
    });

    this.id = resultado.id;
    this.dataCriacao = resultado.dataCriacao;
    this.dataAtualizacao = resultado.dataAtualizacao;
    this.versao = resultado.versao;
  }

  // como o metodo vai se comunicar com o banco, tem que ser assincrono tambem
  async carregar() {
    // Usando um metodo para pegar um id da tabela do banco
    const encontrado = await TabelaFornecedor.pegarPorId(this.id);
    //com os dados que a gente recebe do banco de dados, precisamos pegar os valores e assimilar
    //a nossa instancia para conseguirmos responder na requisicao
    this.empresa = encontrado.empresa;
    this.email = encontrado.email;
    this.categoria = encontrado.categoria;
    this.dataCriacao = encontrado.dataCriacao;
    this.dataAtualizacao = encontrado.dataAtualizacao;
    this.versao = encontrado.versao;
  }

  async atualizar() {
    await TabelaFornecedor.pegarPorId(this.id);
    const campos = ["empresa", "email", "categoria"];
    const dadosParaAtualizar = {};

    campos.forEach((campo) => {
      const valor = this[campo];

      if (typeof valor === "string" && valor.length > 0) {
        dadosParaAtualizar[campo] = valor;
      }
    });

    if (Object.keys(dadosParaAtualizar).length === 0) {
      throw new DadosNaoFornecidos();
    }

    await TabelaFornecedor.atualizar(this.id, dadosParaAtualizar);
  }

  remover() {
    return TabelaFornecedor.remover(this.id);
  }

  validar() {
    const campos = ["empresa", "email", "categoria"];

    campos.forEach((campo) => {
      const valor = this[campo];

      if (typeof valor !== "string" || valor.length === 0) {
        throw new CampoInvalido(campo);
      }
    });
  }
}

module.exports = Fornecedor;
