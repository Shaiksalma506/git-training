import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CreatenewjobComponent } from './pages/createnewjob/createnewjob.component';
import { HomeComponent } from './pages/home/home.component';
import { JobdetailsComponent } from './pages/jobdetails/jobdetails.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { JoListingComponent } from './pages/jo-listing/jo-listing.component';
import { MyjobregistrationComponent } from './pages/myjobregistration/myjobregistration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatenewjobComponent,
    HomeComponent,
    JobdetailsComponent,
    JobsComponent,
    JoListingComponent,
    MyjobregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
