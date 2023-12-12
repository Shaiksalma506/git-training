import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  tittle="Angular"

  onEnroll(){
    const enrollservice = new EnrollService();
    enrollservice.onEnrollClicked(this.tittle);
    
  }
}
