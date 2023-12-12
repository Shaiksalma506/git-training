import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'comment', component: CommentsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations:[AppComponent,
    HomeComponent,
    CoursesComponent,
    ContactComponent,
    CommentsComponent
  ],
  // imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule],
})
export class AppModule{}
