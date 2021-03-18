import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnScreenComponent } from './btn-screen/btn-screen.component';
import { VidScreenComponent } from './vid-screen/vid-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnScreenComponent,
    VidScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
