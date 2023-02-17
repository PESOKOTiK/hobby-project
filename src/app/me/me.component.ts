import { Component } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent {
    myname = 'Alex';
    age = 19;
    isMale = true;
}
