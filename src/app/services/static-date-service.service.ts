import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaticDateServiceService {

  staticPageInformation: any;

  constructor(private httpClient: HttpClient) { }


  getData(): Observable<any> {
    return this.httpClient.get<any>("assets/data/StaticData.json", {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      "Cache-Control": "no-cache" 
    }});
  }

}
