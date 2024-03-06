import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AtendimentoService {
  atendimentosCarregados: any[] = [];
  private readonly firebaseURL = 'https://petcare-18-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {
  }

  cadastrar(atendimento: any) {
    return this.http.post(`${this.firebaseURL}atendimentos.json`, atendimento);
  }

  listar() : Observable<any[]> {
    return this.http.get<any[]>(`${this.firebaseURL}atendimentos.json`);
  }

  detalhar(key: string) {
    return this.http.get(`${this.firebaseURL}atendimentos/${key}.json`);
  }

  atualizar(key: string, atendimento: any) {
    return this.http.put(`${this.firebaseURL}atendimentos/${key}.json`, atendimento);
  }

  excluir(key: string) {
    return this.http.delete(`${this.firebaseURL}atendimentos/${key}.json`);
  }
}
