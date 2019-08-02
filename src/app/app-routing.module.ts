import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  { path: 'kategori', loadChildren: './pages/kategori/kategori.module#KategoriPageModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule' },
  { path: 'keranjang', loadChildren: './pages/keranjang/keranjang.module#KeranjangPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'kategori/buah', loadChildren: './pages/kategori/buah/buah.module#BuahPageModule' },
  { path: 'kategori/sayur', loadChildren: './pages/kategori/sayur/sayur.module#SayurPageModule' },
  { path: 'sayur/:id', loadChildren: './pages/kategori/sayur/sayur.module#SayurPageModule' },
  { path: 'detilbarang/:id/:nama/:kategori/:stok/:harga/:kondisi/:satuan/:gambar', loadChildren: './pages/modalbarang/modalbarang.module#ModalbarangPageModule' },
  { path: 'registerkurir', loadChildren: './pages/registerkurir/registerkurir.module#RegisterkurirPageModule' },
  { path: 'registertoko', loadChildren: './pages/registertoko/registertoko.module#RegistertokoPageModule' },
  { path: 'homekurir', loadChildren: './pages/homekurir/homekurir.module#HomekurirPageModule' },
  { path: 'hometoko', loadChildren: './pages/hometoko/hometoko.module#HometokoPageModule' },
  { path: 'tambahbarang/:id/:nama/:kategori/:stok/:harga/:kondisi/:satuan/:gambar', loadChildren: './pages/tambahbarang/tambahbarang.module#TambahbarangPageModule' },
  { path: 'tambahbarang', loadChildren: './pages/tambahbarang/tambahbarang.module#TambahbarangPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
