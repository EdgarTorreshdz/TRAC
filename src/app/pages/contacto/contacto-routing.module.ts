import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactoPage } from './contacto.page';

import {AuthGuard} from "../../guards/auth.guard";
const routes: Routes = [
  {
    path: '',
    component: ContactoPage, canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactoPageRoutingModule {}
