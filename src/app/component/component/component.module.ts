import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MascotaComponent } from './mascota/mascota.component';
import { ListarMascotasComponent } from './mascota/listar-mascotas/listar-mascotas.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    MascotaComponent,
    ListarMascotasComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    
  ]
})
export class ComponentModule { }
