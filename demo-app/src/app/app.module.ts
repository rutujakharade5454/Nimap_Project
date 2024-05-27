import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './CommonComponents/header/header.component';
import { FooterComponent } from './CommonComponents/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { AboutComponent } from './Pages/about/about.component';
import { ClientsComponent } from './Pages/clients/clients.component';
import { EmployersComponent } from './Pages/employers/employers.component';
import { ContactComponent } from './Pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistrationComponent,
    ProfileComponent,
    AboutComponent,
    ClientsComponent,
    EmployersComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
