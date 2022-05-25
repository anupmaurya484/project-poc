import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views'


const routes: Routes = [
{
  path: '',
  component: HomeComponent
}, 
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
},
{ path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
