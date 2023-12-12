import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MyjobregistrationComponent } from './pages/myjobregistration/myjobregistration.component';
import { JoListingComponent } from './pages/jo-listing/jo-listing.component';
import { JobdetailsComponent } from './pages/jobdetails/jobdetails.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { CreatenewjobComponent } from './pages/createnewjob/createnewjob.component';

const routes: Routes = [
  {
    path : ' ',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path:'home',
    component : HomeComponent
  },
  {
    path:'login',
    component : LoginComponent
  },
  {
    path :'myjobregistration',
    component : MyjobregistrationComponent
  },
  {
    path : 'jo-listing',
    component : JoListingComponent
  },
  {
    path : 'jobdetails',
    component : JobdetailsComponent
  },
  {
    path : 'jobs',
    component : JobsComponent
  },
  {
    path : 'createnewjob',
    component : CreatenewjobComponent
  },
  {
    path :'**',
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
