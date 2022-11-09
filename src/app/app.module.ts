import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { SuporteComponent } from './suporte/suporte.component';
import { InicioModule } from './inicio/inicio.module';
import { ProfessoresModule } from './professores/professores.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './login/auth.service';
import { SuporteModule } from './suporte/suporte.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    SublevelMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    InicioModule,
    ProfessoresModule,
    LoginModule,
    SuporteModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
