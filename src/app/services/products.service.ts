import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataAPI, Result } from '../interfaces/data-api';

interface ApiResponse{
  pae:number,
  per_page:number,
  total:number,
  total_pages:number,
  products:[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

 //private http = inject(HttpClient);

  public getAll():Observable<DataAPI>{
    return this.http.get<DataAPI>('https://peticiones.online/api/products?fields=results')
    .pipe(
      tap(res => {console.log(res);
      })
    )
  }

}
