import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetAppComponent } from './pages/pet-app/pet-app.component';
import { PetListComponent } from './cmps/pet-list/pet-list.component';
import { PetPreviewComponent } from './cmps/pet-preview/pet-preview.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetAppComponent,
    PetListComponent,
    PetPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // must add it for the list render to work ajax calls
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
