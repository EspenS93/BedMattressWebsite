import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Bed } from '../../Models/bed'
import { Picture } from '../../Models/picture'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BedChooserService {

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
  constructor(private http: Http) { }
  getBeds(): Promise<Bed[]> {
    return this.http.get('/api/bed')
      .toPromise()
      .then(response => response.json() as Bed[])
      .catch(this.handleError);
  }

  getSpecificBeds(filter: Bed): Promise<Bed[]> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/bed/filter', JSON.stringify(filter), { headers: headers })
      .toPromise()
      .then(response => response.json() as Bed[])
      .catch(this.handleError);
  }

  getFabrics(): Promise<String[]> {
    return this.http.get('/api/bed/fabrics')
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }

  getColors(): Promise<String[]> {
    return this.http.get('/api/bed/colors')
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }

  getTypes(): Promise<String[]> {
    return this.http.get('/api/bed/types')
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }

  getSizes(): Promise<String[]> {
    return this.http.get('/api/bed/sizes')
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }

  getSeries(): Promise<String[]> {
    return this.http.get('/api/bed/series')
      .toPromise()
      .then(response => response.json() as String[])
      .catch(this.handleError);
  }

  getBed(id: string): Promise<Bed> {
    return this.http.get('/api/bed/' + id)
      .toPromise()
      .then(response => response.json() as Bed)
      .catch(this.handleError);
  }
  // ----------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------
  // -------------------------------Moving to own picture service later----------------------
  // ----------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------
  getPictures(id: string): Promise<Picture[]> {
    return this.http.get('/api/picture/all/' + id)
      .toPromise()
      .then(response => response.json() as Picture[])
      .catch(this.handleError);
  }
  getOnePicture(id: string): Promise<Picture> {
    return this.http.get('/api/picture/' + id)
      .toPromise()
      .then(response => response.json() as Picture)
      .catch(this.handleError);
  }

  addPicture(newPicture: Picture): Promise<Picture> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/picture', JSON.stringify(newPicture), { headers: headers })
      .toPromise()
      .then(response => response.json() as Picture)
      .catch(this.handleError);
  }

  deletePicture(id: string): Promise<void> {
    return this.http.delete('/api/picture/' + id)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updatePicture(picture: Picture): Promise<Picture> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/picture/' + picture.id, JSON.stringify(picture), { headers: headers })
      .toPromise()
      .then(response => response.json() as Picture)
      .catch(this.handleError);
  }
  // ----------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------
  // ----------------------------------------------------------------------------------------

  addBed(newBed: Bed): Promise<Bed> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/bed', JSON.stringify(newBed), { headers: headers })
      .toPromise()
      .then(response => response.json() as Bed)
      .catch(this.handleError);
  }

  deleteBed(id: string): Promise<void> {
    return this.http.delete('/api/bed/' + id)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updateBed(bed: Bed): Promise<Bed> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/bed/' + bed.id, JSON.stringify(bed), { headers: headers })
      .toPromise()
      .then(response => response.json() as Bed)
      .catch(this.handleError);
  }

}
