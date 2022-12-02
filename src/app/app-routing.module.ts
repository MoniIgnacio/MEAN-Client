import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';

// componentes & rutas
const routes: Routes = [
  {path: '' , component: ListProductosComponent},
  {path: 'crear-producto', component: CrearProductoComponent},
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  // redireccion en caso de ruta desconocida
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
