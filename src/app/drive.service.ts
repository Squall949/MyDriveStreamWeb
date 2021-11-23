import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {DriveFile} from './drive/driveFile';

@Injectable({
  providedIn: 'root'
})
export class DriveService {
  private myDriveFilesUrl = 'https://localhost:44316/DriveApi/GetFiles';
  constructor(private http: HttpClient) { }

  getFiles(): Observable<DriveFile []> {
    return this.http.get<DriveFile []>(this.myDriveFilesUrl);
  }
}
