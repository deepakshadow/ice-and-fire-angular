import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

import { BlogService } from '../blog.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  _character: any = [];
  private dataSubscription: Subscription;
  isLoaded: boolean = false;

  constructor(private blogService: BlogService, private _route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.isLoaded = true;
    this.dataSubscription = this._route.params.subscribe((param: Params) => {
      this.blogService.getACharacter(+param['id']).subscribe((next) => {
        this._character = next;
        this.isLoaded = false;
        // // console.log(`TCL: CharacterComponent -> ngOnInit -> this._character`, this._character);
      }, (error) => {
        this.isLoaded = false;
        // console.log(`TCL: CharacterComponent -> ngOnInit -> error`, error);
      })
    })
  }

  goBack = () => {
    this.location.back()
  }

  ngOnDestroy() {
    // console.log(`character view destroyed`);
    this.dataSubscription.unsubscribe();
  }

}
