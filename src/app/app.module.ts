import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DisplayComponent } from './display/display.component';
import { DisplayPipe } from 'src/app/pipes/display.pipe';
import { ChangeComponent } from './change/change.component';
import { RefundComponent } from './refund/refund.component';
import { CoinsComponent } from './coins/coins.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    DisplayPipe,
    ChangeComponent,
    RefundComponent,
    CoinsComponent,
    DashboardComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
