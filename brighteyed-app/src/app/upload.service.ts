import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()

export class UploadService {

  constructor(private http: HttpClient) { }

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
}