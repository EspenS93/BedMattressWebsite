import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Bed } from '../../Models/bed';
import { Picture } from '../../Models/picture';
import { BedChooserService } from '../../Services/bed-chooser/bed-chooser.service';

@Component({
  selector: 'app-bed-chooser',
  templateUrl: './bed-chooser.component.html',
  styleUrls: ['./bed-chooser.component.css'],
})
export class BedChooserComponent implements OnInit {

  selectedBed: Bed;
  beds: Bed[];
  colors: String[];
  types: String[];
  fabrics: String[];
  sizes: String[];
  series: String[];
  pictures: Picture[] = [];

  form = this.fb.group({
    Color: [""],
    Type: [""],
    Fabric: [""],
    Size: [""],
    Series: [""],

  })

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bedChooserService: BedChooserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getBeds();
    this.getTypes();
    this.getColors();
    this.getFabrics();
    this.getSizes();
    this.getSeries();
  }

  onSelect(bed: Bed): void {
    this.selectedBed = bed;
  }

  gotoDetail(): void {
    this.router.navigate(['/bed/', this.selectedBed.id]);
  }
  getPicture(id: string): string {
    let picture: Picture = new Picture();
    this.bedChooserService.getOnePicture(id).then(image => picture = image);
    return picture.image;
  }

  getBeds(): void {
    this.bedChooserService
      .getBeds()
      .then(beds => this.beds = beds);
  }
  getColors(): void {
    this.bedChooserService
      .getColors()
      .then(colors => this.colors = colors);
  }
  getTypes(): void {
    this.bedChooserService
      .getTypes()
      .then(types => this.types = types);
  }
  getFabrics(): void {
    this.bedChooserService
      .getFabrics()
      .then(fabrics => this.fabrics = fabrics);
  }
  getSizes(): void {
    this.bedChooserService
      .getSizes()
      .then(sizes => this.sizes = sizes);
  }
  getSeries(): void {
    this.bedChooserService
      .getSeries()
      .then(series => this.series = series);
  }
  onSubmit(): void {
    this.bedChooserService.getSpecificBeds(this.form.value).then(beds => this.beds = beds);
  }
  deleteBed(bed: Bed): void {
    this.bedChooserService
      .deleteBed(bed.id)
      .then(() => {
        this.beds = this.beds.filter(h => h !== bed);
        if (this.selectedBed === bed) { this.selectedBed = null; }
      });
  }
}
