import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class UploadService {

  constructor(private http: HttpClient) {
  }

  // file from event.target.files[0]
  uploadFile(url: string, file: File, name: string): Observable<HttpEvent<any>> {

    let formData = new FormData();
    formData.append('card', file);

    let params = new HttpParams();
    let headers = new HttpHeaders();

    headers.set('Content-Type', 'multipart/form-data');

    console.log('name parameter in http request');
    console.log(name);

    params = params.append('name', name);

    const options = {
      withCredentials: true,
      headers: headers,
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', url, formData, options);
    console.log(req);
    return this.http.request(req);
  }

  public getWallet(): Observable<any> {
    console.log('Get wallet');

    let params = new HttpParams();
    let headers = new HttpHeaders();

    headers.set('Accept', 'application/json');

    const options = {
      withCredentials: true,
      headers: headers,
    };

    const req = new HttpRequest('GET', 'http://localhost:3000/api/wallet', options);
    console.log(req);
    return this.http.request(req);
  }

  private extractData(res: Response): any {
    return res.json();
  }
  private handleError(error: any): Observable<string> {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
