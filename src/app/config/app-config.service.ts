import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Config } from './models/config';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  static settings: Config;

  constructor(private http: HttpClient,) {
  }

  load() {
      const jsonFile = `assets/config/config.${environment.name}.json`;
      return new Promise<void>((resolve, reject) => {
          this.http.get(jsonFile).toPromise().then((response: Config) => {
              AppConfig.settings = <Config>response;
              resolve();
          }).catch((response: any) => {
              reject(`Falha para carregar aquivo de configurações.`);
          });
      });
  }
}
