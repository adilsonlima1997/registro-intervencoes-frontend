import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvariaService {

  //URL do registr_de_intervencoes
  private url:string = 'http://localhost:8080';

  //aqui neste construtor o http é responsável para fazer as requisições para a nossa api
  constructor(private http:HttpClient) { }
}
