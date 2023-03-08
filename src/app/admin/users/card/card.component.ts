import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() userName: string='';
@Input() empId: number | undefined;
@Input() adminStatus: boolean = false;
}
