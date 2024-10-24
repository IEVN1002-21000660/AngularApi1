import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor() { }
  alumno:string[]=['a','b','c']


  add(alumno:string){
    this.alumno
  }
}
