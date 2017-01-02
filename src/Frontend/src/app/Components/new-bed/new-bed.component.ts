import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Bed } from '../../Models/bed';
import { Picture } from '../../Models/picture';
import { BedChooserService } from '../../Services/bed-chooser/bed-chooser.service';

@Component({
  selector: 'app-new-bed',
  templateUrl: './new-bed.component.html',
  styleUrls: ['./new-bed.component.css']
})
export class NewBedComponent implements OnInit {

  newBed: Bed;
  newPictures: Picture[];
  formdata: FormData = new FormData();
  files: FileList;
  image: string[];
  constructor(
    private bedChooserService: BedChooserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newBed = new Bed();
  }
  add(): void {
    this.newPictures = [];
    this.newBed.id = UUID.UUID();
    this.bedChooserService.addBed(this.newBed);

    for (let i = 0; i < this.files.length; i++) {
      this.newPictures[i] = new Picture();
      this.newPictures[i].id = UUID.UUID();
      this.newPictures[i].name = this.files[i].name;
      this.newPictures[i].contentType = this.files[i].type;
      this.newPictures[i].image = this.image[i];
      this.newPictures[i].bedID = this.newBed.id;
      this.bedChooserService.addPicture(this.newPictures[i]);
    }

    this.router.navigateByUrl('/webshop');
  }
  readThis(inputValue: any) {
    this.files = inputValue.files;
    this.image = [];
    let myReader: FileReader = new FileReader();

    for (let i = 0; i < this.files.length; i++) {
      myReader.onload = (e) => {
        this.image[i] = myReader.result;
      }
      myReader.readAsDataURL(this.files[i]);

    }

  }
  fileChangeEvent($event) {
    this.readThis($event.target);
  }

  /*
  readThis(inputValue: any) {
    let filelist: FileList = inputValue.target.files;
    this.newPictures = [];
    let file: File = inputValue.files[0];
    let image;
    let myReader: FileReader = new FileReader();
    for (let i = 0; i < filelist.length; i++) {
      myReader.onload = (e) => {
      image = myReader.result;
    }
    myReader.readAsDataURL(file);
      this.newPictures[i] = new Picture(UUID.UUID(), filelist[i].name, filelist[i].type, image);
    }
  }*/
}
