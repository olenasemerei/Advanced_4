import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson01Component } from './lesson01/lesson01.component';
import { Lesson02Component } from './lesson02/lesson02.component';
import { Lesson03Component } from './lesson03/lesson03.component';
import { TabletaskComponent } from './lesson03/tabletask/tabletask.component';
import { Lesson04Component } from './lesson04/lesson04.component';
import { SearchPipe } from './lesson04/search.pipe';
import { SortPipe } from './lesson04/sort.pipe';
import { Sort2Pipe } from './lesson04/sort2.pipe';
import { Sort3Pipe } from './lesson04/sort3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Lesson01Component,
    Lesson02Component,
    Lesson03Component,
    TabletaskComponent,
    Lesson04Component,
    SearchPipe,
    SortPipe,
    Sort2Pipe,
    Sort3Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
