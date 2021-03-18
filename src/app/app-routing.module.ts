import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BtnScreenComponent } from './btn-screen/btn-screen.component';
import { VidScreenComponent } from './vid-screen/vid-screen.component';

const routes: Routes = [
  { path: '', component: BtnScreenComponent },
  { path: 'video', component: VidScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
