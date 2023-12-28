import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomanpageComponent } from './womanpage/womanpage.component';
import { BodyComponent } from './body/body.component';
import { MenpageComponent } from './menpage/menpage.component';
import { KidspageComponent } from './kidspage/kidspage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TechpageComponent } from './techpage/techpage.component';
import { EmbroideredKurtasComponent } from './embroidered-kurtas/embroidered-kurtas.component';
import { PumaBrandComponent } from './puma-brand/puma-brand.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { VykdpageComponent } from './vykdpage/vykdpage.component';
import { WishlistpageComponent } from './wishlistpage/wishlistpage.component';
import { ShopingbasketComponent } from './shopingbasket/shopingbasket.component';
import { LoginComponent } from './login/login.component';
import { LoginPageComponent } from './signup_page/login-page.component';

const routes: Routes = [
 
  {path: 'womanpage', component: WomanpageComponent},
  {path: '', component: BodyComponent},
  {path: 'menpage', component: MenpageComponent},
  {path:'kidspage',component:KidspageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'techpage',component:TechpageComponent},
  {path:'embroidered',component:EmbroideredKurtasComponent},
  {path:'pumabrand',component:PumaBrandComponent},
  {path:'productdetails',component:ProductdetailsComponent},
  {path:'vykdpage',component:VykdpageComponent},
  {path:'wishlistpage',component:WishlistpageComponent},
  {path:'shopingcart',component:ShopingbasketComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
