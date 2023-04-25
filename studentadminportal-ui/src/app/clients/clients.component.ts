import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientsService } from './clients.service';
import { Client } from '../models/api-models/client.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{
 constructor(private clientservice : ClientsService){}
 clients : Client[]= [];
 displayedColumns: string[] = ['firstName', 'lastName', 'dateOfBirth', 'email', 'mobile', 'gender'];
 @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  filterString = '';
  @ViewChild(MatSort) matSort!: MatSort;
 dataSource: MatTableDataSource<Client> = new MatTableDataSource<Client>();
 
 ngOnInit(): void {
  // Fetch Students
  this.clientservice.getClients()
    .subscribe(
      (successResponse) => {
        this.clients = successResponse;
        this.dataSource = new MatTableDataSource<Client>(this.clients);
        this.dataSource.paginator = this.paginator;
       
        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
}
filterStudents() {
  this.dataSource.filter = this.filterString.trim().toLowerCase();
}

}
