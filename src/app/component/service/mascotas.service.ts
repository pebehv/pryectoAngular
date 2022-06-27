/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor() { }
}*/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mascota } from '../interface/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getMascotas(): Observable<Mascota[]> {
    console.log("mascotas")
    return this.http.get<Mascota[]>(`${this.baseUrl}/getAll.php`);
  }

  getMascota(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idMascota=${id}`);
  }

  addMascota(mascota: Mascota) {
    return this.http.post(`${this.baseUrl}/post.php`, mascota);
  }

  deleteMascota(mascota: Mascota) {
    return this.http.delete(`${this.baseUrl}/delete.php?idMascota=${mascota.id}`);
  }

  updateMascota(mascota: Mascota) {
    return this.http.put(`${this.baseUrl}/update.php`, mascota);
  }
}