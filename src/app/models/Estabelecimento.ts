export class Estabelecimento {
    dadosEstabelecimento: {
      userId: string,
      nome: string,
      endereco: string,
      lat: number,
      lng: number,
      regiao: string,
      telefone: number,
      celular: number,
      ifood: string,
      horarios: string,
      servico: string,
      raioDeEntrega: number,
    };
    usuarioEstabelecimento: {
      _id: string,
      name: string,
      email: string,
      cpf: number
    };
  }
