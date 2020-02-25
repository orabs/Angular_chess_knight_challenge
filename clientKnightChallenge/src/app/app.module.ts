import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TestComponent } from './test/test.component';
import { SamDragAndDropGridModule } from '@sam-1994/ngx-drag-and-drop-grid';
import { Test2Component } from './test2/test2.component';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    SamDragAndDropGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
