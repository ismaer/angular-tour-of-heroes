import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

//Le asigno un componente a una ruta, de esta manera queda disponible
//para asignar este valor "heroes", dashboard, detail/id,... al atributo routerLink en una etiqueta a
const routes: Routes = [
  //nos redirecciona de la ruta vacia (la raiz) a la ruta /dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'heroes', component: HeroesComponent }
  //los dos puntos en la ruta indican que id está en un placeholder para un hero id específico
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
