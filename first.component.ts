import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

  public BatchName =" Angular web Devlopment";

  Fun()
  {
        return "Inside Fun function";
  }
  @Output() public myevent = new EventEmitter<string>();
  
  public Sendmessage()
  {
    const message = 'Educating for Better tomorrow....';
    if (message == 'Educating for Better tomorrow....') {
      this.myevent.emit(message);
    } else {
      console.log('Marvellous Infosystem...');
    }
    // this.myevent.emit('Educating for Better tommarow....');
  }
  Uppercase()
  {
    this.myevent.emit('Educating for Better tommarow....'.toUpperCase());
  }
  Lowercase()
  {
    this.myevent.emit('Educating for Better tommarow....'.toLocaleLowerCase());
  }

}
