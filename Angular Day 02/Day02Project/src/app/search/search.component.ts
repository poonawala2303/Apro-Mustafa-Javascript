import { Component , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  searchText = ""


  @Output() eventToParentFromChild:EventEmitter<string> = new EventEmitter<string>();


  sendText()
  {
    this.eventToParentFromChild.emit(this.searchText);
  }

}
