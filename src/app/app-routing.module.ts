import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path: '', 
  component: HomeComponent
  },
  {path: 'home', 
  component: HomeComponent
  },
  {path: 'header', 
  component: HeaderComponent
  },
  {path: 'footer', 
  component: FooterComponent
  },
  {path: 'about', 
  component: AboutComponent
  },
  {path: 'directive', 
  component: DirectiveComponent
  },
  {path: '**', 
  component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
