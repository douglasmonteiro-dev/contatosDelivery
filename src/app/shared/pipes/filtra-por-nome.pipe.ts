import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtraPorNome'
})

export class FiltraPorNomePipe implements PipeTransform {
  transform(usuarios : any, inputDoUsuario) {
      
          return usuarios.filter((usuario) => {
              if (usuario.name) {
              return usuario.name
                  .toLowerCase()
                  .includes(inputDoUsuario.toLowerCase())
          }
          return true
      })
  }
}