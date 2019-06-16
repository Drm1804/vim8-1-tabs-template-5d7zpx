import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: []
})
export class TabTitleComponent implements OnInit {

  @Input() isActive: boolean;
  @Input() id: number;
  @Output() onClick = new EventEmitter<any>();
  constructor(){}

  ngOnInit() {}


  tabClick(event) {
    this.onClick.emit(this.id);
  }
}
