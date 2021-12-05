import { Component, OnInit, Inject } from '@angular/core';
import { DriveService } from '../drive.service';
import { DriveFile } from './driveFile';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DomSanitizer,SafeUrl} from '@angular/platform-browser'

@Component({
  selector: 'app-default',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {
  files: DriveFile[] = [];

  constructor(private driveService: DriveService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.driveService.getFiles().subscribe(files => this.files = files);
  }

  view(fileID: string): void {
    const link = `https://drive.google.com/file/d/${fileID}/preview`;
    this.dialog.open(DialogViewVideo, {data:link});
  }

}

@Component({
  selector: 'dialog-view-video',
  templateUrl: 'dialog-view-video.html',
  styleUrls: ['./drive.component.css']
})
export class DialogViewVideo {
  safeURL: SafeUrl;
  constructor(private sanitizer:DomSanitizer,@Inject(MAT_DIALOG_DATA) public link: string) {
    //must sanitize the URL for frame's source
    this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }
}
