import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './Components/hotels/hotels.component';
import { ResultsComponent } from './Components/results/results.component';
import { FilterComponent } from './Components/filter/filter.component';
import { SearchComponent } from './Components/search/search.component';
import { RouterModule } from '@angular/router';
import { MatComponentsModule } from './mat-components.module';
import { HttpClientModule } from '@angular/common/http';
import { HotelsDataService } from './Services/hotels-data.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    ResultsComponent,
    FilterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"", component:SearchComponent},
      {path:"hotels", component:HotelsComponent}
    ]),
    MatComponentsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
  providers: [HotelsDataService,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
