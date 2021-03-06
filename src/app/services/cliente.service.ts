import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, ClienteInfo } from '../models/clientes';




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url = 'http://127.0.0.1:8000/';

  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.url}clientes`);
  }
  getCliente(c: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.url}clientes/${c}/`);
  }
  getClienteInfo(c: number): Observable<ClienteInfo> {
    return this.http.get<ClienteInfo>(`${this.url}clientes/${c}/`);
  }
  addCliente(c: ClienteInfo): Observable<ClienteInfo> {
    return this.http.post<ClienteInfo>(`${this.url}clientes/add`, c, httpOptions);
  }
  updateCliente (c: ClienteInfo): Observable<Response> {
    return this.http.put<Response>(`${this.url}clientes/${c.id}/edit`, c, httpOptions);
  }
  deleteCliente(c: Cliente) {
    return this.http.delete(`${this.url}clientes/${c.id}/remove`, httpOptions);
  }
}
