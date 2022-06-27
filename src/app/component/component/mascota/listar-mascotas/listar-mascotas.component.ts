/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}?*/

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component,NgModule, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mascota, Prueba } from 'src/app/component/interface/interface';
import { MascotasService } from 'src/app/component/service/mascotas.service';
import { DialogoConfirmacionComponent } from '../dialogo-confirmacion/dialogo-confirmacion.component';


@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css'],
  //imports:[HttpClientModule  ]
  providers: [Component, MascotasService, CommonModule],

  
})
export class ListarMascotasComponent implements OnInit {
  public mascotas : Mascota[] = [];
  //prueb: Prueba= {}
  hola = "hola"
  
 /* private mascotas: Mascota[] = [
    new Mascota("Maggie", "Chihuahua", 20)
  ];
8*/
  constructor(
    public  mascotasService: MascotasService, 
    private dialogo: MatDialog, 
    private snackBar: MatSnackBar) { }

  eliminarMascota(mascota: Mascota) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${mascota.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        //console.log('aca :', confirmado)
        if (!confirmado) return;
        this.mascotasService
          .deleteMascota(mascota)
          .subscribe(() => {
            this.obtenerMascotas();
            this.snackBar.open('Mascota eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    return this.mascotasService
      .getMascotas()
      .subscribe((mascotas: Mascota[]) =>
       {
          this.mascotas = mascotas ;
          console.log('en lista: ', this.mascotas, this.mascotas[0].nombre) }
      );
      
  }

}


