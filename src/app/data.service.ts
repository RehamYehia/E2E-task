import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { DataModel } from './DataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
 result:DataModel;
  constructor(private _http:HttpClient) {
    
   }


getData():Observable<DataModel>
{
  return this._http.get<DataModel>("https://api.myjson.com/bins/tl0bp");

 
}

}