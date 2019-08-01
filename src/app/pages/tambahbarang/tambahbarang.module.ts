import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TambahbarangPage } from './tambahbarang.page';

const routes: Routes = [
  {
    path: '',
    component: TambahbarangPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TambahbarangPage]
})
export class TambahbarangPageModule {}
