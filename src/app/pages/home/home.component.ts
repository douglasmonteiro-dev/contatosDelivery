import {Component, OnInit, ViewChild, Pipe} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  telefone: string;
  regiao: string;
}

/** Constants used to fill up our data base. */
const REGIAO: string[] = [
  'SP - ZONA SUL', 'SP - ZONA NORTE', 'SP - ZONA LESTE', 'SP - ZONA OESTE', 'GUARULHOS - CECAP', 'GUARULHOS - TABOÃO', 'GUARULHOS - CENTRO', 'GUARULHOS - PIMENTAS', 'GUARULHOS - CONTINENTAL', 'GUARULHOS - AEROPORTO',
  'SÃO MIGUEL', 'OSASCO', 'ARUJÁ', 'VALE DO PARAÍBA', 'ABCD'
];
const NAMES: string[] = [
  'EXEMPLO Maia', 'EXEMPLO Asher', 'EXEMPLO Olivia', 'EXEMPLO Atticus', 'EXEMPLO Amelia', 'EXEMPLO Jack', 'EXEMPLO Charlotte', 'EXEMPLO Theodore', 'EXEMPLO Isla', 'EXEMPLO Oliver',
  'EXEMPLO Isabella', 'EXEMPLO Jasper', 'EXEMPLO Cora', 'EXEMPLO Levi', 'EXEMPLO Violet', 'EXEMPLO Arthur', 'EXEMPLO Mia', 'EXEMPLO Thomas', 'EXEMPLO Elizabeth'
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'regiao', 'telefone', ];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    telefone: Math.round(Math.random() * 109869280).toString(),
    regiao: REGIAO[Math.round(Math.random() * (REGIAO.length - 1))]
  };
}

