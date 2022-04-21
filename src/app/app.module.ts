import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetAppComponent } from './pages/pet-app/pet-app.component';
import { PetListComponent } from './cmps/pet-list/pet-list.component';
import { PetPreviewComponent } from './cmps/pet-preview/pet-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { PetFilterComponent } from './cmps/pet-filter/pet-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PetAppComponent,
    PetListComponent,
    PetPreviewComponent,
    PetFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // must add it for the list render to work ajax calls
    FormsModule // need this for the ngModel in the filter , two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
