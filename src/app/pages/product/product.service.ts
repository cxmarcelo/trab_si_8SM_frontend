import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/app-config.service';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,) { }

  public getProducts(): Observable<Product[]> {
    const headers = {'Accept': 'application/json' };
    return this.http.get<any>(AppConfig.settings.apiServer.url + `product`,{headers});
  }

  public postProduct(obj: Product): Observable<Product> {
    const headers = {'Accept': 'application/json' };
    return this.http.post<any>(AppConfig.settings.apiServer.url + `product`, obj ,{headers});
  }

  public updateProduct(obj: Product): Observable<Product> {
    const headers = {'Accept': 'application/json' };
    return this.http.put<any>(AppConfig.settings.apiServer.url + `product/${obj.id}`, obj ,{headers});
  }

  public deleteProduct(obj: Product): Observable<void> {
    const headers = {'Accept': 'application/json' };
    return this.http.delete<any>(AppConfig.settings.apiServer.url + `product/${obj.id}` ,{headers});
  }
}
