import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=-14.798104&longitude=-39.172263&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode';

  constructor(private http: HttpClient) {}

  obterClima(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
