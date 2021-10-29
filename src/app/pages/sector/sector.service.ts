import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/app-config.service';
import { Sector } from 'src/app/models/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor(private http: HttpClient,) { }

  public getSectors(): Observable<Sector[]> {
    const headers = {'Accept': 'application/json' };
    return this.http.get<any>(AppConfig.settings.apiServer.url + `sector`,{headers});
  }

  public postSector(obj: Sector): Observable<Sector> {
    const headers = {'Accept': 'application/json' };
    return this.http.post<any>(AppConfig.settings.apiServer.url + `sector`, obj ,{headers});
  }

  public updateSector(obj: Sector): Observable<Sector> {
    const headers = {'Accept': 'application/json' };
    return this.http.put<any>(AppConfig.settings.apiServer.url + `sector/${obj.id}`, obj ,{headers});
  }

  public deleteSector(obj: Sector): Observable<void> {
    return this.http.delete<any>(AppConfig.settings.apiServer.url + `sector/${obj.id}`);
  }
}
