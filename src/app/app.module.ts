import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { BlogModule } from "./blog/blog.module";
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './blog/home/carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [AppComponent, HeaderComponent, CarouselComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
