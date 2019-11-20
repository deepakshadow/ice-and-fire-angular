import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { BlogService } from '../blog.service';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit, OnDestroy {

  _house: any = [];
  private dataSubscription: Subscription;
  isLoaded: boolean = false;

  constructor(private blogService: BlogService, private _route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.isLoaded = true;
    this.dataSubscription = this._route.params.subscribe((param: Params) => {
      this.blogService.getAHouse(+param['id']).subscribe((next) => {
        this._house = next;
        this.isLoaded = false;
        // // console.log(`TCL: HouseComponent -> ngOnInit -> this._house`, this._house);
      }, (error) => {
        this.isLoaded = false;
        // console.log(`TCL: HouseComponent -> ngOnInit -> error`, error);
      })
    })
  }

  goBack = () => {
    this.location.back()
  }

  ngOnDestroy() {
    // console.log(`house view destroyed`);
    this.dataSubscription.unsubscribe();
  }
}
