import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
//import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:Http) { }

  storetodaydata(server:any[]){

   return this.http.put('https://dchat-6d481.firebaseio.com/data.json',server);

  }

  getData(){
    return this.http.get('https://dchat-6d481.firebaseio.com/data.json')
    // .map(
    //   (response:Response)=>{
    //     const data= response.json();
    //     return data;
    //   }
    // );
    .pipe(
      map(
      (response:Response)=>{
        const data= response.json();
        return data;
      }
    )
    );

  }
}
