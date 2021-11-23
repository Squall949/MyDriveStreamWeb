import { Component, OnInit } from '@angular/core';
import { DriveService } from '../drive.service';
import { DriveFile } from './driveFile'; 

@Component({
  selector: 'app-default',
  templateUrl: './drive.component.html',
  styleUrls: ['./drive.component.css']
})
export class DriveComponent implements OnInit {
  files: DriveFile[] = [];

  constructor(private driveService: DriveService) { }

  ngOnInit(): void {
    this.driveService.getFiles().subscribe(files => this.files = files);
  }

}
