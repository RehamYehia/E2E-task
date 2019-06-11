import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http' ;
import { Observable } from 'rxjs';
import { DataModel } from './app/DataModel';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  

  constructor(private _http:HttpClient) {
    
   }


getData(): Observable <DataModel>
{
  return this._http.get<DataModel>("https://api.myjson.com/bins/tl0bp");
}

}