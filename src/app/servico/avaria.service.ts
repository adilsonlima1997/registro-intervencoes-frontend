import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avaria } from '../modelo/Avaria';

@Injectable({
  providedIn: 'root'
})
export class AvariaService {

  //URL do registr_de_intervencoes
  private url:string = 'http://localhost:8080';

  //aqui neste construtor o http é responsável para fazer as requisições para a nossa api
  constructor(private http:HttpClient) { }
  //Método para selecionar todas as avarias
  selecionar():Observable<Avaria[]>{
    return this.http.get<Avaria[]>(this.url);
  }

  //Método para cadastrar avarias
  cadastrar(obj:Avaria):Observable<Avaria>{
    return this.http.post<Avaria>(this.url, obj);
  }
}
