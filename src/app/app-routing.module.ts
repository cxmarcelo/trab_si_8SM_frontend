import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main/app-main.component';
import { AuthGuard } from './guards/auth.guard';
import { CategoryComponent } from './pages/category/category.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { SectorComponent } from './pages/sector/sector.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppMainComponent,
        canActivate: [AuthGuard],
        children: [
          { canActivate: [AuthGuard], path: '', component: HomePageComponent},
          { canActivate: [AuthGuard], path: 'sector', component: SectorComponent},
          { canActivate: [AuthGuard], path: 'category', component: CategoryComponent},
          { canActivate: [AuthGuard], path: 'product', component: ProductComponent},
        ],
      },
      {
        path: '',
        children: [
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
        ]
      },
      { path: '**', redirectTo: '/' },
    ], { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
