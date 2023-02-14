import { Component } from '@angular/core';

@Component({
  selector: 'app-big',
  templateUrl: './big.component.html',
  styleUrls: ['./big.component.scss']
})
export class BigComponent {
  big=4;
      car()
      {
        this.big = 1;
      }
      plane()
      {
        this.big=2;
      }
      ship()
      {
        this.big=3;
      }
}
