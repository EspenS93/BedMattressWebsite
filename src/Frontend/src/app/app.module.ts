import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BedChooserComponent } from './Components/bed-chooser/bed-chooser.component';
import { BedChooserService } from './Services/bed-chooser/bed-chooser.service';
import { BedComponent } from './Components/bed/bed.component';
import { FrontpageComponent } from './Components/frontpage/Frontpage.component';

@NgModule({
  declarations: [
    AppComponent,
    BedChooserComponent,
    BedComponent,
    FrontpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [BedChooserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
