import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './views/home/home.component';
import { BannerComponent } from './pages/banner/banner.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { BannerDoisComponent } from './pages/banner-dois/banner-dois.component';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    BannerComponent,
    ServicosComponent,
    BannerDoisComponent,
    DepoimentosComponent,
    ContatosComponent,
    FooterComponent
  ],
  imports: [
    [NgbModule],
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
