import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../../shared/user/user.component';
import { ClienteService } from '../../services/cliente.service';
import { HttpResponse } from '@angular/common/http';
import { GoogleMapsService } from 'src/app/services/googlemaps.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';


@Component({
  selector: 'app-dados-cliente',
  templateUrl: './dados-cliente.component.html',
  styleUrls: ['./dados-cliente.component.scss']
})
export class DadosClienteComponent implements OnInit {
  user: UserComponent = new UserComponent;
  busca: String;
  cliente: Cliente;
  clientes: [Cliente];
  anamnese: {};
  formEndereco: FormGroup;
  formDadosPessoais: FormGroup;
  formDadosFinanceiros: FormGroup;
  zoom = 15;
  localizacao = '';
  lat = -23.5503099;
  lng = -46.6342009;


  constructor(private clienteService: ClienteService, private _formBuilder: FormBuilder, private googleMaps: GoogleMapsService) {
  }

  ngOnInit() {
    if (this.user.isNutri()) {
      this.clienteService.listar()
    .subscribe((resposta: any) => {
      this.clientes = resposta.clientes;
      this.selecionaCliente(resposta.clientes[0]);
    });
    } else {
      this.clienteService.selecionar(this.user.id)
      .subscribe((resposta: Cliente) => {
        this.cliente = resposta;
      });
    }
  }


  // search = (text$: Observable<string>) =>
  //   text$.pipe(
  //     debounceTime(200),
  //     distinctUntilChanged(),
  //     map(term => term.length < 2 ? []
  //       : this.clientes.name.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  //   )

  selecionaCliente (cliente: any) {
    this.cliente = null;
    this.clienteService.selecionar(cliente._id)
    .subscribe((resposta: Cliente) => {
      this.cliente = resposta;
      this.pesquisarEndereco();
    });

  }
  pesquisarEndereco() {
    this.googleMaps.pesquisar(this.cliente.dadosCliente.endereco)
    .subscribe((resposta: HttpResponse<UserComponent>) => {
      this.atualizarEndereco(resposta);

    });
  }
  atualizarEndereco(dados) {
    if ( dados.status === 'OK' && dados.results[0]) {
      this.cliente.dadosCliente.endereco = dados.results[0].formatted_address;
      this.localizacao = dados.results[0].formatted_address;
      this.cliente.dadosCliente.lat = dados.results[0].geometry.location.lat;
      this.lat = dados.results[0].geometry.location.lat;
      this.cliente.dadosCliente.lng = dados.results[0].geometry.location.lng;
      this.lng = dados.results[0].geometry.location.lng;
    }
  }
  atualizar() {
    this.clienteService.atualizar(this.cliente)
    .subscribe((resposta: Cliente) => {
      console.log(resposta);
    });
  }
  remover(id) {
    this.clienteService.apagar(id)
    .subscribe((resposta) => {
      console.log(resposta);
    });
  }


}
