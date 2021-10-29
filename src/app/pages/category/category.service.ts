import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/app-config.service';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,) { }

  public getCategories(): Observable<Category[]> {
    const headers = {'Accept': 'application/json' };
    return this.http.get<any>(AppConfig.settings.apiServer.url + `category`,{headers});
  }

  public postCategory(obj: Category): Observable<Category> {
    const headers = {'Accept': 'application/json' };
    return this.http.post<any>(AppConfig.settings.apiServer.url + `category`, obj ,{headers});
  }
  
  public updateCategory(obj: Category): Observable<Category> {
    const headers = {'Accept': 'application/json' };
    return this.http.put<any>(AppConfig.settings.apiServer.url + `category/${obj.id}`, obj ,{headers});
  }

  public deleteCategory(obj: Category): Observable<void> {
    const headers = {'Accept': 'application/json' };
    return this.http.delete<any>(AppConfig.settings.apiServer.url + `category/${obj.id}` ,{headers});
  }
}
