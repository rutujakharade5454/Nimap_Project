import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { ProfileComponent } from './Pages/profile/profile.component';

import { AboutComponent } from './Pages/about/about.component';
import { ClientsComponent } from './Pages/clients/clients.component';
import { EmployersComponent } from './Pages/employers/employers.component';
import { ContactComponent } from './Pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'employers', component: EmployersComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
