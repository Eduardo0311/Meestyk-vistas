import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { HombresComponent } from './components/hombres/hombres.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MujeresComponent } from './components/mujeres/mujeres.component';
import { ParejasComponent } from './components/parejas/parejas.component';
import { TransComponent } from './components/trans/trans.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroSatisComponent } from './components/registro-satis/registro-satis.component';
import { IniSesComponent } from './components/ini-ses/ini-ses.component';
import { LiveCamsComponent } from './components/live-cams/live-cams.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PerfilHeaderComponent } from './components/perfil-header/perfil-header.component';
import { PerfilImgAndNameComponent } from './components/perfil-img-and-name/perfil-img-and-name.component';
import { PerfilPaquetesSuscripComponent } from './components/perfil-paquetes-suscrip/perfil-paquetes-suscrip.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilSuscribeteComponent } from './components/perfil-suscribete/perfil-suscribete.component';
import { PerfilContentOcultoComponent } from './components/perfil-content-oculto/perfil-content-oculto.component';
import { PerfilBenefSuscripComponent } from './components/perfil-benef-suscrip/perfil-benef-suscrip.component';
import { AggMetodoPagoComponent } from './components/agg-metodo-pago/agg-metodo-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CategoriasComponent,
    HombresComponent,
    InformacionComponent,
    InicioComponent,
    MujeresComponent,
    ParejasComponent,
    TransComponent,
    RegistroComponent,
    RegistroSatisComponent,
    IniSesComponent,
    LiveCamsComponent,
    IniciarSesionComponent,
    PerfilHeaderComponent,
    PerfilImgAndNameComponent,
    PerfilPaquetesSuscripComponent,
    PerfilComponent,
    PerfilSuscribeteComponent,
    PerfilContentOcultoComponent,
    PerfilBenefSuscripComponent,
    AggMetodoPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
