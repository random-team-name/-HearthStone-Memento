import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { CardListPageComponent } from './card-list-page/card-list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HearthsoneCardsService } from './providers/hearthsone-cards.service';
import { ToArrayPipe } from './pipe/to-array.pipe';
import { LazyLoading } from './directives/lazy-loading.directive';
import { PaginationPipe } from './pipe/pagination.pipe';
import { CustomPipe } from './pipe/custom.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardListPageComponent,
    ToArrayPipe,
    LazyLoading,
    PaginationPipe,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'card-list', component: CardListPageComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ]),
    CoreModule.forRoot()
  ],
  providers: [
    HearthsoneCardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
