import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './home/welcome.component';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { PageNotFoundComponent } from './products/page-not-found.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        { path: 'products', component: ProductListComponent},
        { path: 'product/:id', canActivate: [ProductGuardService], component: ProductDetailComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path: '**', component: PageNotFoundComponent }
    ], {useHash: true})
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
