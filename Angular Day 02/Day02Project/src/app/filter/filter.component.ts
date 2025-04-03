import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  type = "All";

  @Output() eventToParentFromChild:EventEmitter<string> = new EventEmitter<string>();

  sendType()
  {
    this.eventToParentFromChild.emit(this.type);
  }
  
}
