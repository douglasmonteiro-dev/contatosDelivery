export class Cliente {
    dadosCliente: {
      userId: string,
      endereco: string,
      lat: number,
      lng: number,
      telefone: number,
      celular: number,
      nomeCartao: string,
      numeroCartao: number,
      mesCartao: number,
      anoCartao: number,
      cvvCartao: number,
      servicos: string,
      regiao: string
    };
    usuarioCliente: {
      _id: string,
      name: string,
      email: string,
      cpf: number
    };
  }
