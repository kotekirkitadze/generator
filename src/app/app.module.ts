import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { ItemComponent } from './components/shell/item/item.component';
import { OutsideComponent } from './components/outside/outside.component';

@NgModule({
  declarations: [AppComponent, ShellComponent, ItemComponent, OutsideComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
