import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegistratioFormService {

  openRegistration = false;


  constructor() {

  }

  closeRegistrationClick() {
    this.openRegistration = false;
  }

  openRegistrationClick() {
    this.openRegistration = true;
  }
}
