import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { PetAppComponent } from './pages/pet-app/pet-app.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: '', component:PetAppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
