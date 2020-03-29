import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {User} from '../models/User';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  constructor(private http: HttpClient) {
   }

  listar() {
    return this.http.get<any>(`${environment.apiUrl}/estabelecimentos`)
        .pipe(map(estabelecimentos => {
            // login successful if there's a jwt token in the response
            if (estabelecimentos) {
                console.log(JSON.stringify(estabelecimentos));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }

            return estabelecimentos;
        }));
}
  selecionar(id) {
    return this.http.get<any>(`${environment.apiUrl}/estabelecimentos/selecionar?userId=${id}`)
        .pipe(map(estabelecimento => {
            // login successful if there's a jwt token in the response
            if (estabelecimento) {
                console.log(JSON.stringify(estabelecimento));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
            return estabelecimento;
        }));
}
atualizar(estabelecimento) {
  return this.http.put<any>(`${environment.apiUrl}/estabelecimentos/atualizar?userId=${estabelecimento.dadosEstabelecimento.userId}`, estabelecimento)
        .pipe(map(estabelecimentoParam => {
            // login successful if there's a jwt token in the response
            if (estabelecimentoParam) {
                console.log(JSON.stringify(estabelecimentoParam));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
            return estabelecimentoParam;
        }));
}
apagar(id) {
  return this.http.delete<any>(`${environment.apiUrl}/estabelecimentos/apagar?userId=${id}`)
        .pipe(map(estabelecimentoParam => {
            // login successful if there's a jwt token in the response
            if (estabelecimentoParam) {
                console.log(JSON.stringify(estabelecimentoParam));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
            return estabelecimentoParam;
        }));
}

adicionar(estabelecimento) {
    return this.http.post<any>(`${environment.apiUrl}/estabelecimentos/novo`, estabelecimento.dadosEstabelecimento)
        // tslint:disable-next-line:no-shadowed-variable
        .pipe(map(estabelecimento => {
            // login successful if there's a jwt token in the response
            if (estabelecimento) {
                console.log(JSON.stringify(estabelecimento));
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            }
  
            return estabelecimento;
        }));
  }

}