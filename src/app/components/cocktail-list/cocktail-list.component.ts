import { Component, inject } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {

  private CocktailService = inject(CocktailService);

  cocktails!: Cocktail[];

  onClick() {
    console.log(this.CocktailService.getCocktails());

this.cocktails = this.CocktailService.getCocktails();
  }
}
