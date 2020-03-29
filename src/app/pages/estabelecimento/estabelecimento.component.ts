import { Component, OnInit } from '@angular/core';
import { UserComponent } from 'src/app/shared/user/user.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Estabelecimento } from 'src/app/models/Estabelecimento';
import { EstabelecimentoService } from 'src/app/services/estabelecimento.service';
import { GoogleMapsService } from 'src/app/services/googlemaps.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {
  user: UserComponent = new UserComponent;
  busca: String;
  estabelecimento: Estabelecimento;
  estabelecimentos: [Estabelecimento];
  anamnese: {};
  formEndereco: FormGroup;
  formDadosPessoais: FormGroup;
  formDadosFinanceiros: FormGroup;
  zoom = 15;
  localizacao = '';
  lat = -23.5503099;
  lng = -46.6342009;
  
  constructor(private estabelecimentoService: EstabelecimentoService, private _formBuilder: FormBuilder, private googleMaps: GoogleMapsService) {
  }

  ngOnInit() {
    // if (this.user.isNutri()) {
    //   this.estabelecimentoService.listar()
    // .subscribe((resposta: any) => {
    //   this.estabelecimentos = resposta.estabelecimentos;
    //   this.selecionaEstabelecimento(resposta.estabelecimentos[0]);
    // });
    // } else {
    //   this.estabelecimentoService.selecionar(this.user.id)
    //   .subscribe((resposta: Estabelecimento) => {
    //     this.estabelecimento = resposta;
    //   });
    // }
    let dadosEstabelecimento = {
    userId: this.user.id.toString(),
    nome: '',
    endereco: '',
    lat: 0,
    lng: 0,
    regiao: '',
    telefone: 0,
    celular: 0,
    ifood: '',
    horarios: '',
    servico: '',
    raioDeEntrega: 0,
    }
    this.estabelecimento = {dadosEstabelecimento, usuarioEstabelecimento: {
      _id: '',
    name: '',
    email: '',
    cpf: 0,
    }}
    
    this.estabelecimentos = null;
  }


  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : this.estabelecimentos.name.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )

  selecionaEstabelecimento (estabelecimento: any) {
    this.estabelecimento = null;
    this.estabelecimentoService.selecionar(estabelecimento._id)
    .subscribe((resposta: Estabelecimento) => {
      this.estabelecimento = resposta;
      this.pesquisarEndereco();
    });

  }
  pesquisarEndereco() {
    this.googleMaps.pesquisar(this.estabelecimento.dadosEstabelecimento.endereco)
    .subscribe((resposta: HttpResponse<UserComponent>) => {
      this.atualizarEndereco(resposta);

    });
  }
  atualizarEndereco(dados) {
    if ( dados.status === 'OK' && dados.results[0]) {
      this.estabelecimento.dadosEstabelecimento.endereco = dados.results[0].formatted_address;
      this.localizacao = dados.results[0].formatted_address;
      this.estabelecimento.dadosEstabelecimento.lat = dados.results[0].geometry.location.lat;
      this.lat = dados.results[0].geometry.location.lat;
      this.estabelecimento.dadosEstabelecimento.lng = dados.results[0].geometry.location.lng;
      this.lng = dados.results[0].geometry.location.lng;
    }
  }
  atualizar() {
    this.estabelecimentoService.atualizar(this.estabelecimento)
    .subscribe((resposta: Estabelecimento) => {
      console.log(resposta);
    });
  }
  adicionar() {
    this.estabelecimentoService.adicionar(this.estabelecimento)
    .subscribe((resposta: Estabelecimento) => {
      console.log(resposta);
    });
  }
  remover(id) {
    this.estabelecimentoService.apagar(id)
    .subscribe((resposta) => {
      console.log(resposta);
    });
  }

}
