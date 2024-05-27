import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RegistratioFormService } from '../../Services/registratio-form.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() openRegistration = new EventEmitter<boolean>();

  isShowSearch = true;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistratioFormService) {
    this.router.events.subscribe((val) => {
      // if (this.router.url === '/profile' || this.router.url === '/profile/*') {

      // if (this.router.url.includes('/profile')) {
      //   this.isShowSearch = false;
      // } else {
      //   this.isShowSearch = true;
      // }

      // if (this.router.url.includes('/profile')
      //   || this.router.url.includes('/registration') || this.router.url.includes('/login') || this.router.url.includes('/home') || this.router.url.includes('/')) {
      //   this.isShowSearch = false;
      // }

  
      if (this.router.url === '/') {
        this.isShowSearch = true;
      } else {
        this.isShowSearch = false;
      }



    });



  }

  openRegistrationClick() {
    this.openRegistration.emit(true);
  }

}
