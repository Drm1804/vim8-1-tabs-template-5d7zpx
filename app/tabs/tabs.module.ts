import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabContentComponent } from './tab/tab-content/tab-content.component';
import { TabTitleComponent } from './tab/tab-title/tab-title.component';

const components = [TabsComponent, TabComponent, TabContentComponent, TabTitleComponent]

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ ...components ],
  exports: [ ...components ]
})
export class TabsModule { }
