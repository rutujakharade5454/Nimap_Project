import { Component } from '@angular/core';

import { Router, RouterState } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RegistratioFormService } from './Services/registratio-form.service';

import { Subscription } from 'rxjs';
import { ProfileComponent } from './Pages/profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  subscription: Subscription = new Subscription();


  title = 'demo-app';
  isOpenRegistration = false;
  // [profileData]="profileData" [isEdit]="isEdit" [isShow]="isShow"
  profileData: any;
  isEdit: any;
  isShow: any;

  heder1 = true;

  constructor(private router: Router, private route: ActivatedRoute, private registrationService: RegistratioFormService) {
    this.router.events.subscribe((val) => {

      if (this.router.url === '/') {

        this.heder1 = true;
      } else {
        this.heder1 = false;
      }
    });

    this.isOpenRegistration = this.registrationService.openRegistration;



  }



  openRegistration(e: any) {
    console.log(e);

    this.isOpenRegistration = e;
    this.isEdit = false;


  }

  onActivate(e: any) {
    if (e instanceof ProfileComponent) {
      this.subscription = e.openRegistration.subscribe((data: any) => {
        console.log(data);
        this.isOpenRegistration = data;
      });

      this.subscription = e.profileData.subscribe((data: any) => {
        console.log("Main App Component");

        console.log(data);
        this.profileData = data;
      });

      this.subscription = e.isEdit.subscribe((data: any) => {
        console.log("Main App Component");
        console.log(data);
        this.isEdit = data;
      });

      this.subscription = e.isShow.subscribe((data: any) => {
        console.log("Main App Component");
        console.log(data);
        this.isShow = data;
      });

    }

  }

  onDeactivate(e: any) {
    if (e instanceof ProfileComponent) {
      this.subscription.unsubscribe();
    }
  }
}
