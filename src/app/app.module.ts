import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarasoleComponent} from './carasole/carasole.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './signup_page/login-page.component';
import { WomanpageComponent } from './womanpage/womanpage.component';
import { BodyComponent } from './body/body.component';
import { MenpageComponent } from './menpage/menpage.component';
import { KidspageComponent } from './kidspage/kidspage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TechpageComponent } from './techpage/techpage.component';
import { WomanCharacterProductComponent } from './woman-character-product/woman-character-product.component';
import { EmbroideredKurtasComponent } from './embroidered-kurtas/embroidered-kurtas.component';
import { FusionDressesComponent } from './fusion-dresses/fusion-dresses.component';
import { PumaBrandComponent } from './puma-brand/puma-brand.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { VykdpageComponent } from './vykdpage/vykdpage.component';
import { WishlistpageComponent } from './wishlistpage/wishlistpage.component';
import { ShopingbasketComponent } from './shopingbasket/shopingbasket.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarasoleComponent,
    FooterComponent,
    LoginPageComponent,
    WomanpageComponent,
    BodyComponent,
    MenpageComponent,
    KidspageComponent,
    HomepageComponent,
    TechpageComponent,
    WomanCharacterProductComponent,
    EmbroideredKurtasComponent,
    FusionDressesComponent,
    PumaBrandComponent,
    ProductdetailsComponent,
    VykdpageComponent,
    WishlistpageComponent,
    ShopingbasketComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
