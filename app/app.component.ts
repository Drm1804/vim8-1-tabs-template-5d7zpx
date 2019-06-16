import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private activeId = 1;
  public tabs = [ 1, 2 ];

  public dec() {
    this.tabs = this.tabs.slice(0, -1);
    if(this.activeId > this.tabs.length) {
      this.activeId = 1;
    }
  }

  isActive(id:number) {
    return id === this.activeId;
  }

  clickTab(tabId) {
    this.activeId = tabId;
  }

  public inc() {
    this.tabs = [ ...this.tabs, (this.tabs.length + 1) ];
  }
}
