import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { Page404Component } from './pages/page404/page404.component'
import { UnderconstructionComponent } from './pages/underconstruction/underconstruction.component'


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'under-construction', component: UnderconstructionComponent},
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
