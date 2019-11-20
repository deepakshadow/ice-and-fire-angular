import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { CarouselComponent } from "./home/carousel/carousel.component";
import { NotFoundComponent } from "./home/not-found/not-found.component";
import { BookComponent } from "./home/book/book.component";
import { CharacterComponent } from "./home/character/character.component";
import { HouseComponent } from "./home/house/house.component";
import { SpinnerComponent } from "./home/spinner/spinner.component";
import { SortPipe } from "./home/sort.pipe";
import { FilterPipe } from "./home/filter.pipe";
import { SelectPipe } from "./home/select.pipe";


const appRoute: Routes = [
  { path: "", redirectTo: "/banner", pathMatch: "full" },
  { path: "banner", component: CarouselComponent },
  { path: "blogs", component: HomeComponent },
  { path: "book/:id", component: BookComponent },
  { path: "character/:id", component: CharacterComponent },
  { path: "house/:id", component: HouseComponent },
  { path: "not", component: NotFoundComponent },
  { path: "**", redirectTo: "/not" }
];

@NgModule({
  declarations: [
    HomeComponent,
    BookComponent,
    CharacterComponent,
    HouseComponent,
    NotFoundComponent,
    SpinnerComponent,
    SortPipe,
    FilterPipe,
    SelectPipe
  ],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class BlogModule {}
