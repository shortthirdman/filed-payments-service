import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  { path: 'checkout', component: CheckOutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRouteComponents = [CheckOutComponent];