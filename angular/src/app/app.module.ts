import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CardListPageComponent } from './card-list-page/card-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardListPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'card-list', component: CardListPageComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ]),
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
