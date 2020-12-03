import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammingPage } from './pages/programming/Programing.page';

const routes: Routes = [{
  path: '',
  redirectTo: 'programming',
  pathMatch: 'full'

},
{
  path: 'programming',
  component: ProgrammingPage,

}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
