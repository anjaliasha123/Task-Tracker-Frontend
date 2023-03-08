import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-deatils',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-deatils.component.css']
})
export class TeamDeatilsComponent {

  @Input() members: any;
  clear: boolean = false;
  @Output() sendStatus = new EventEmitter();
  onClick(){
    console.log('clicked to clear')
    this.clear = true;
    this.sendStatus.emit(this.clear);
  }
}
