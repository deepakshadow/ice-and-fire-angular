import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { BlogService } from '../blog.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;
  _book: any = [];
  isLoaded: boolean = false;

  constructor(private blogService: BlogService, private _route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.isLoaded = true;
    this.dataSubscription = this._route.params.subscribe((param: Params) => {
      this.blogService.getABook(+param['id']).subscribe((next) => {
        this._book = next;
        this.isLoaded = false;
        // console.log(`TCL: BookComponent -> ngOnInit -> this._book`, this._book);
      }, (error) => {
        this.isLoaded = false;
        console.log(`TCL: BookComponent -> ngOnInit -> error`, error);
      })
    })
  }

  goBack = () => {
    this.location.back()
  }

  ngOnDestroy() {
    console.log(`book view destroyed`);
    this.dataSubscription.unsubscribe();
  }

}
