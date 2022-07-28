import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: [ './child.component.css' ]
})
export class ChildComponent  {
  name = 'Angular';

  @Input() val;
  @Input() one:boolean;
  @Input() two:boolean;

  numbers =[];
  
}
