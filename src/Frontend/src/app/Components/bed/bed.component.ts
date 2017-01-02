import { Component, OnInit } from '@angular/core';
import { Bed } from '../../Models/bed';
import { Picture } from '../../Models/picture';
import { BedChooserService } from '../../Services/bed-chooser/bed-chooser.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css']
})
export class BedComponent implements OnInit {
  bed: Bed;
  pictures: Picture[] =[];

  constructor(
    private bedChooserService: BedChooserService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    this.route.params.forEach((params: Params) => {
      let id: string = params['id']
      this.bedChooserService.getBed(id).then(bed => { this.bed = bed });
      this.bedChooserService.getPictures(id).then(pictures => this.pictures=pictures);
    });
  }

  ngOnInit() {
    
  }

  goBack(): void {
    this.location.back();
  }
  addToCart(): void {
    //TODO: make a cart and add bed to cart with this method
  }

}
