import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/api-models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
 private baseApiUrl= 'https://localhost:7004';
  constructor(private httpClient: HttpClient) { 
  
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.baseApiUrl + '/api/Clients/Clients');
  }
}


