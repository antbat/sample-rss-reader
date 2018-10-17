import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { ItemArticleComponent } from './list-articles/item-article/item-article.component';

const appRoutes: Routes = [
  { path: 'article/:id', component: ItemArticleComponent },
  { path: 'article', component: ListArticlesComponent },

  { path: '',
    redirectTo: '/article',
    pathMatch: 'full'
  },
  { path: '**', component: ListArticlesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    ItemArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
