import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { PetAppComponent } from './pages/pet-app/pet-app.component';
import { PetDetailsComponent } from './pages/pet-details/pet-details.component';
import { PetResolverService } from './services/pet-resolver.service';

const routes: Routes = [
  {path: 'pet/:id', component: PetDetailsComponent, resolve: {pet: PetResolverService}, canActivate: [AuthGuard]},
  {path: 'about', component:AboutComponent},
  {path: '', component:PetAppComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
