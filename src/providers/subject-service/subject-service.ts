import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from '../../models/subjects';
import { Observable } from 'rxjs/observable';


@Injectable()
export class SubjectServiceProvider {


  apiKey = "http://192.168.10.121//data_api/get_subject.php"


  constructor(public http: HttpClient){
    
  }

  getSubject():Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiKey);
  }

  // constructor(public http: HttpClient) {
  //   console.log('Hello SubjectServiceProvider Provider');
  // }

}
