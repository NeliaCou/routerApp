import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../models/cocktail.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.css'
})
export class CocktailDetailsComponent implements OnInit{

  cocktail! : Cocktail; 

  constructor(
    private route: ActivatedRoute, 
    private cocktailService: CocktailService){};
  

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
          const id = +params.get('id')!;
          return this.cocktailService.getCocktailById(id);
      })
    ).subscribe(cocktail => {
      this.cocktail = cocktail
    });
  }
}

// const id: number = Number(this.route.snapshot.paramMap.get('id'));
