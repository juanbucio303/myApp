import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the ProveedorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProveedorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProveedorProvider Provider');
  }
  apiUrl='http://appslim/api/';
  getDatos() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'clientes/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  addUser(datos) {
  let options={headers: { 'Content-Type':'application/json'}};
  return new Promise(resolve =>{
    this.http.post(this.apiUrl+"clientes/agregar",JSON.stringify(datos),options).
    subscribe(data => {
      resolve(data);
    },err =>{
        console.log(err);
    });
  });
}
borrar(){
  let id:any=111;
  // return new Promise(resolve =>{
  //   this.http.post(this.apiUrl+"clientes/borrar/",id)});
  return new Promise(resolve =>{
    this.http.delete(this.apiUrl+"clientes/borrar",id).
    subscribe(data => {
      resolve(data);
    },err =>{
        console.log(err);
    });
  });
}


  // obtenerdatos(){
  //     return  this.http.get(apiUrl);
  // }
}
