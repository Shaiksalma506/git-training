import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'observables';
  myObservable = Observable.create((observer) => {
    setTimeout(()=>{observer.next("A")},1000)
    setTimeout(()=>{observer.next("B")},2000)
    setTimeout(()=>{observer.next("C")},3000)
    setTimeout(()=>{observer.next("D")},4000)
    setTimeout(()=>{observer.next("E")},5000)
    
  });

  ngOnInit(){
    this.myObservable.subscribe((val) => {
      console.log(val);
    });
  }
}
