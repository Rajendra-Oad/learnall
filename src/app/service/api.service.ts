import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url:string= 'http://ilandertech.com/api/index.php/Welcome/'

  constructor(public https:HttpClient) { }

  register(data:any){
    return this.https.post(this.url+'AddStuRegister',data);
  }

  login(data:any){
    return this.https.post(this.url+'StuLogin',data);
  }

  getUsers(){
    return this.https.get(this.url+'getStuUsers');
}

}