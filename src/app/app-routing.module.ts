import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/component/login/login.component';
import { ListarMascotasComponent } from './component/component/mascota/listar-mascotas/listar-mascotas.component';
import { MascotaComponent } from './component/component/mascota/mascota.component';



const routes: Routes = [

  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  { path: "mascotas", component: ListarMascotasComponent },
  { path: "mascota", component: MascotaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
