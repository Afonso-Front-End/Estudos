import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostagemsService {
  // Link postagem
  link:string = 'https://jsonplaceholder.typicode.com/posts'
  // Contrutor
  constructor(private http:HttpClient) { }

  // Metodo para listar postagem 
  listar():Observable<Postagem[]>{
    return this.http.get<Postagem[]>(this.link)
  }
}
