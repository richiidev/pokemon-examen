import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetalleComponent } from './components/pokemon-detalle/pokemon-detalle.component';
import { PokemonTablaComponent } from './components/pokemon-tabla/pokemon-tabla.component';



const routes: Routes = [
  {path: 'home', component: PokemonTablaComponent},
  {path: 'pokeDetail/:id', component: PokemonDetalleComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
