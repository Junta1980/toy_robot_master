import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { CellComponent } from './components/grid/cell/cell.component';
import { CommandComponent } from './components/commad/command.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoveComponent } from './components/move/move.component';
import { SharedModule } from './shared/shared.module';
import { ReportComponent } from './components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    CellComponent,
    CommandComponent,
    MoveComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
