import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
  ],
  declarations: [ 
    AppComponent, 
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
