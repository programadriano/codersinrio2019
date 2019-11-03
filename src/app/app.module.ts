import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesafePipe } from './pipes/pipesafe.pipe';
import { AlertService } from './shared/services/alert.service'

@NgModule({
  declarations: [
    AppComponent,
    PipesafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
