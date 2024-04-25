import { Injectable, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private http = inject(HttpClient);

  constructor() { }

  getCocktails(): Observable<Cocktail[]>{
 return this.http.get<Cocktail[]>("assets/cocktails.json");
  }


  getCocktailById(id: number): Observable<Cocktail>{
    return this.getCocktails()
    .pipe(
      map(cocktails => cocktails.find(cocktail => cocktail.id === id) as Cocktail)
    );
  }  

}
