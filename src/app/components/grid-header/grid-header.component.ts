import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss']
})
export class GridHeaderComponent {
  @Input() label: string;

}
