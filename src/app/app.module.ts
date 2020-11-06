import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HeroesComponent } from './components/pages/heroes/heroes.component';
import { HeroComponent } from './components/shared/hero/hero.component';
import { HeroInfoComponent } from './components/pages/hero-info/hero-info.component';
import { SearchComponent } from './components/pages/search/search.component';

import { HeroesService } from '../services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    HeroInfoComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, CommonModule],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
