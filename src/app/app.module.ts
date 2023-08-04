import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { AdministradorComponent } from './modules/administrador/administrador.component';
import { CursosAddComponent } from './modules/administrador/cursos-add/cursos-add.component';
import { CursosEditComponent } from './modules/administrador/cursos-edit/cursos-edit.component';
import { DatosComponent } from './modules/usuario/datos/datos.component';
import { ContrasenaComponent } from './modules/usuario/contrasena/contrasena.component';
import { AutenticacionComponent } from './modules/autenticacion/autenticacion.component';
import { LoginComponent } from './modules/autenticacion/login/login.component';
import { RegisterComponent } from './modules/autenticacion/register/register.component';
import { PanelComponent } from './modules/administrador/panel/panel.component';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule, FormGroup, Validators, FormBuilder } from "@angular/forms";
import { CursoseleccionadoComponent } from './modules/home/cursoseleccionado/cursoseleccionado.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsuarioComponent,
    AdministradorComponent,
    CursosAddComponent,
    CursosEditComponent,
    DatosComponent,
    ContrasenaComponent,
    AutenticacionComponent,
    LoginComponent,
    RegisterComponent,
    PanelComponent,
    CursoseleccionadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
