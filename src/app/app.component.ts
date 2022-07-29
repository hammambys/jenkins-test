import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   counter : number = 0;
    
    increment(){
      this.counter += 1;
    }
    
    decrement(){
      this.counter -= 1;
    }

}
