import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = 'https://samples.openweathermap.org/data/2.5'
  private apiKey = '6b84d4fe8016764febcbf424801ec188'

  constructor(private http: HttpClient) {
  }

  getAll():Observable<any>{
    return this.http.get(`${this.baseUrl}/forecast?id=524901&appid=${this.apiKey}`)
  }

  getCityWeather(cityId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/weather?id=${cityId}&appid=${this.apiKey}`)
  }

}
