import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ErrorComponent } from './components/error/error.component';
import { ButtonChildComponent } from './components/button-child/button-child.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { provideHttpClient } from '@angular/common/http';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    DirectiveComponent,
    ErrorComponent,
    ButtonChildComponent,
    CocktailListComponent,
    CocktailDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
