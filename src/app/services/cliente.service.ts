import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {User} from '../models/User';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
   }

  listar() {
    return this.http.get<any>(`${environment.apiUrl}/clientes`)
        .pipe(map(clientes => {
            // login successful if there's a jwt token in the response
            if (clientes) {
                console.log(JSON.stringify(clientes));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }

            return clientes;
        }));
}
  selecionar(id) {
    return this.http.get<any>(`${environment.apiUrl}/clientes/selecionar?userId=${id}`)
        .pipe(map(cliente => {
            // login successful if there's a jwt token in the response
            if (cliente) {
                console.log(JSON.stringify(cliente));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
            return cliente;
        }));
}
atualizar(cliente) {
  return this.http.put<any>(`${environment.apiUrl}/clientes/atualizar?userId=${cliente.dadosCliente.userId}`, cliente)
        .pipe(map(clienteParam => {
            // login successful if there's a jwt token in the response
            if (clienteParam) {
                console.log(JSON.stringify(clienteParam));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
            return clienteParam;
        }));
}
apagar(id) {
  return this.http.delete<any>(`${environment.apiUrl}/clientes/apagar?userId=${id}`)
        .pipe(map(clienteParam => {
            // login successful if there's a jwt token in the response
            if (clienteParam) {
                console.log(JSON.stringify(clienteParam));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
            return clienteParam;
        }));
}

}
