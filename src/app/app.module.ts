import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDietComponent } from './add-diet/add-diet.component';
import { ExerManagerComponent } from './exer-manager/exer-manager.component';
import { ListDietComponent } from './list-diet/list-diet.component';
import { ListExerComponent } from './list-exer/list-exer.component';
import { TrackerComponent } from './tracker/tracker.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDietComponent,
    ExerManagerComponent,
    ListDietComponent,
    ListExerComponent,
    TrackerComponent
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
