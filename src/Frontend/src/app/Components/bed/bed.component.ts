import { Component, OnInit } from '@angular/core';
import { Bed } from '../../Models/bed';
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

  constructor(
    private bedChooserServiceService: BedChooserService,
    private route: ActivatedRoute,
    private location: Location
  ) { 
    this.route.params.forEach((params: Params) => {
      let id: string = params['id']
      this.bedChooserServiceService.getBed(id).then(bed => { this.bed = bed });
    });
  }

  ngOnInit() {
    
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.bedChooserServiceService.updateBed(this.bed)
      .then(() => this.goBack());
  }

}
