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
      image: "https://www.thecocktaildb.com/images/media/drink/xxyywq1454511117.jpg"
    },
    {
      name: "green", 
      price: 24,
      image: "https://www.thecocktaildb.com/images/media/drink/rvwrvv1468877323.jpg"
    }
  ]; 

  getCocktails(){
 console.log(this.cocktail);
 return this.cocktail;
  }
}
