import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})
export class JavascriptComponent {
tittle="javascript"

onEnroll(){

  const enrollservice = new EnrollService();
  enrollservice.onEnrollClicked(this.tittle);
}
}
