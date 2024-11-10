import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistreComponent } from './client/registre/registre.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './client/login/login.component';
import { MenuComponent } from './Menu/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AllProductesComponent } from './all-productes/all-productes.component';
import { RestaurentComponent } from './restaurent/restaurent.component';
import { DietFoodsComponent } from './diet-foods/diet-foods.component';
import { DesertFoodsComponent } from './desert-foods/desert-foods.component';
import { ProfilComponent } from './client/profil/profil.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProfilComponent } from './client/update-profil/update-profil.component';
import { HistoriqueComponent } from './client/historique/historique.component';
import { BasketComponent } from './basket/basket.component';
import { RestaurentMenuComponent } from './restaurent-menu/restaurent-menu.component';
import { RestaurentRegisterComponent } from './restaurent/restaurent-register/restaurent-register.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { RestaurentLoginComponent } from './restaurent/restaurent-login/restaurent-login.component';
import { AddFoodComponent } from './restaurent/add-food/add-food.component';
import { RestaurentProfilComponent } from './restaurent/restaurent-profil/restaurent-profil.component';
import { NavRestComponent } from './nav-rest/nav-rest.component';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { UpdateRestoComponent } from './restaurent/update-resto/update-resto.component';
import { ContasComponent } from './admin/contas/contas.component';
import { SideBarAdminComponent } from './admin/side-bar-admin/side-bar-admin.component';
import { HommeComponent } from './admin/homme/homme.component';
import { ProfilAdminComponent } from './admin/profil-admin/profil-admin.component';
import { RestoComponent } from './admin/resto/resto.component';
import { UsersComponent } from './admin/users/users.component';
import { FactureComponent } from './client/facture/facture.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { EditFoodComponent } from './edit-food/edit-food.component';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistreComponent,
    LoginComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AllProductesComponent,
    RestaurentComponent,
    DietFoodsComponent,
    DesertFoodsComponent,
    ProfilComponent,
    SidebarComponent,
    ContactComponent,
    UpdateProfilComponent,
    HistoriqueComponent,
    BasketComponent,
    RestaurentMenuComponent,
    RestaurentRegisterComponent,
    NavHomeComponent,
    RestaurentLoginComponent,
    AddFoodComponent,
    RestaurentProfilComponent,
    NavRestComponent,
    MyMenuComponent,
    UpdateRestoComponent,
    ContasComponent,
    SideBarAdminComponent,
    HommeComponent,
    ProfilAdminComponent,
    RestoComponent,
    UsersComponent,
    FactureComponent,
    UpdateUserComponent,
    EditFoodComponent,






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
