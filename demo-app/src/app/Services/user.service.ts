import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get(this.URL_API);
  }

  createUser(user: any) {
    return this.http.post(this.URL_API, user);
  }

  getUserById(id: any) {
    return this.http.get(`${this.URL_API}/${id}`);
  }

  updateUser(user: any) {
    return this.http.put(`${this.URL_API}/${user.id}`, user);
  }

  updatePhoto(user: any) {
    return this.http.put(`${this.URL_API}/${user.id}`, user);
  }



}
