import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from './guard/login.guard';
import { InfoProdutoComponent } from './components/info-produto/info-produto.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "produto/:id", component: InfoProdutoComponent},
  // {path: "login", component: LoginComponent},
  {path: "comprar", component: CarrinhoComponent},
  {path: "**", redirectTo: "home", pathMatch:"full"},
  {path: "", redirectTo: "home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
