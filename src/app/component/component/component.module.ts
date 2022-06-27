import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MascotaComponent } from './mascota/mascota.component';
import { ListarMascotasComponent } from './mascota/listar-mascotas/listar-mascotas.component';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from './mascota/dialogo-confirmacion/dialogo-confirmacion.component';

@NgModule({
  declarations: [
    LoginComponent,
    MascotaComponent,
    ListarMascotasComponent,
    DialogoConfirmacionComponent
  ],
  imports: [
    CommonModule, 
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ComponentModule { }
