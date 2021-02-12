import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { MyRedDirective } from './my-red.directive';
import { MypipePipe } from './mypipe.pipe';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformsComponent,
    ReactiveformsComponent,
    MyRedDirective,
    MypipePipe,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
