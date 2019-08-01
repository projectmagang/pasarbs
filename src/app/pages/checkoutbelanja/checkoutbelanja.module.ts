import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckoutbelanjaPage } from './checkoutbelanja.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutbelanjaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckoutbelanjaPage]
})
export class CheckoutbelanjaPageModule {}
