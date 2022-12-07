import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
url = 'http://localhost:4000/api/productos/'
  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarProducto(productoId: string): Observable<any>{
    return this.http.delete(this.url + productoId)
  }

  crearProducto(producto: Producto): Observable<any>{
    return this.http.post(this.url, producto)
  }

  obtenerProducto(productoId: string): Observable<any>{
    return this.http.get(this.url + productoId)
  }

  editarProducto(productoId: string, producto: Producto): Observable<any>{
    return this.http.put(this.url + productoId, producto)
  }
}
