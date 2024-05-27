import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterState } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../Services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Output() openRegistration = new EventEmitter<boolean>();
  @Output() profileData = new EventEmitter<any>();
  @Output() isEdit = new EventEmitter<boolean>();
  @Output() isShow = new EventEmitter<boolean>();



  firstName = 'Abc';
  lastName = 'Xyz';
  email = 'abc@gmail.com';
  phone = '1234567890';
  age = 25;
  state = 'Maharashtra';
  country = 'India';
  address = 'Pune';
  photo = 'https://www.w3schools.com/howto/img_avatar.png';
  tags = ['Cricket', 'Football', 'Hockey'];
  Subscribe = true;
  userid = 1;

  userData: any;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.userService.getUserById(
        params['id']
      ).subscribe((data: any) => {
        console.log(data);
        this.userData = data;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.phone = data.phone;
        this.age = data.age;
        this.state = data.state;
        this.country = data.country;
        this.address = data.address;
        this.photo = data.photo;
        this.tags = data.tags;
        this.Subscribe = data.Subscribe;
        this.userid = data.id;
      });
    });
  }



  editPhoto() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.click();
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        this.photo = e.target.result;

        this.userService.updatePhoto({
          id: this.userid,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phone: this.phone,
          age: this.age,
          state: this.state,
          country: this.country,
          address: this.address,
          photo: this.photo,
          tags: this.tags,
          Subscribe: this.Subscribe



        }).subscribe((data: any) => {
          console.log(data);
          alert('Photo Updated Successfully');
          this.photo = data.photo;


        });
      };



    }



  }

  okMsg() {
    alert("Thank you for your response");
  }

  editProfile() {
    this.openRegistration.emit(true);
    this.profileData.emit(this.userData);
    this.isEdit.emit(true);
    this.isShow.emit(false);
  }



}
