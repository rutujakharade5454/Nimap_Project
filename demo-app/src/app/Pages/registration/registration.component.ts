import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { RegistratioFormService } from '../../Services/registratio-form.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  @Output() openRegistration = new EventEmitter<boolean>();
  @Input() profileData: any;
  @Input() isEdit: any;
  @Input() isShow: any;


  registrationForm: FormGroup = new FormGroup({});

  tagList: any =
    {
      "Cricket": true,
      "Football": true,
      "Hockey": true

    }



  constructor(private userService: UserService, private router: Router, private registrationService: RegistratioFormService) {
    // this.registrationForm = new FormGroup({
    //   firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{1,20}$')]),
    //   lastName: new FormControl(''),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   phone: new FormControl(''),
    //   age: new FormControl(''),
    //   state: new FormControl(''),
    //   country: new FormControl(''),
    //   address: new FormControl(''),
    //   photo: new FormControl(''),
    //   tags: new FormControl(this.tagList),
    //   Subscribe: new FormControl(''),
    // });

  }

  ngOnInit() {

    if (this.isEdit) {
      this.registrationForm = new FormGroup({
        firstName: new FormControl(this.profileData.firstName, [Validators.required, Validators.pattern('^[a-zA-Z]{1,20}$')]),
        lastName: new FormControl(this.profileData.lastName),
        email: new FormControl(this.profileData.email, [Validators.required, Validators.email]),
        phone: new FormControl(this.profileData.phone),
        age: new FormControl(this.profileData.age),
        state: new FormControl(this.profileData.state),
        country: new FormControl(this.profileData.country),
        address: new FormControl(this.profileData.address),
        photo: new FormControl(this.profileData.photo),
        tags: new FormControl(this.profileData.tags),
        Subscribe: new FormControl(this.profileData.Subscribe),
        id: new FormControl(this.profileData.id)
      });
    } else {
      this.registrationForm = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{1,20}$')]),
        lastName: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(''),
        age: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        address: new FormControl(''),
        photo: new FormControl(''),
        tags: new FormControl(this.tagList),
        Subscribe: new FormControl(''),
      });
    }

  }

  closeRegistrationClick() {
    this.openRegistration.emit(false);
  }

  onSubmit() {
    console.warn(this.registrationForm.value);

    if (this.isEdit) {
      this.userService.updateUser(this.registrationForm.value).subscribe(
        {
          next: (data: any) => {
            console.log(data);
            alert('User Updated Successfully');
            this.registrationForm.reset();
            let userId = data.id;
            this.router.navigate(['/profile', userId]);

            this.openRegistration.emit(false);
          },
          error: (error: any) => {
            console.log(error);
            alert('Error while updating user');
          },
          complete: () => {
            console.log('Complete');
          }

        }

      );
    } else {

      if (this.registrationForm.valid) {
        this.userService.createUser(this.registrationForm.value).subscribe(
          {
            next: (data: any) => {
              console.log(data);
              alert('User Created Successfully');
              this.registrationForm.reset();
              let userId = data.id;
              this.router.navigate(['/profile', userId]);

              this.openRegistration.emit(false);
            },
            error: (error: any) => {
              console.log(error);
              alert('Error while creating user');
            },
            complete: () => {
              console.log('Complete');
            }

          }

        );
      } else {
        alert('Please Check the form');
      }
    }



  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const img = new Image();
      img.src = URL.createObjectURL(event.target.files[0]);
      img.onload = () => {
        console.log(img.width, img.height);
        if (img.width > 310 || img.height > 325) {
          alert('Image size should be 310px x 325px');
          return;
        }
      }




      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.registrationForm.patchValue({
          photo: event.target.result

        });
      }


   
    }



  }

  removeTag(tag: any) {
    this.tagList[tag] = false;
  }



}
