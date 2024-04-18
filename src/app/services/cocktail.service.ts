import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktail: Cocktail[] = [
    {
      name: "blue", 
      price: 12,
      image: "https://cdn2.thecatapi.com/images/3it.jpg"
    },
    {
      name: "green", 
      price: 24,
      image: "https://cdn2.thecatapi.com/images/3it.jpg"
    }
  ]; 

  getCocktails(){
 console.log(this.cocktail);
 return this.cocktail;
  }
}
