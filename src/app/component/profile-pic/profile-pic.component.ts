import { Component, OnInit } from '@angular/core';
//import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.scss']
})
export class ProfilePicComponent implements OnInit {
  // imageChangedEvent: any = '';
  // croppedImageEvent: ImageCroppedEvent;
  // path: any = '';
  // constructor(private dialogRef: MatDialogRef<ProfilePicComponent>) { }

  ngOnInit() {
  }

  // fileChangeEvent(event: any): void {
  //   this.imageChangedEvent = event;
  //   console.log("30 : ", event.target.files[0]);
  //   this.path = event.target.files[0].name;
  // }

  // imageCropped(event: ImageCroppedEvent) {
  //   this.croppedImageEvent = event;
  //   // this.croppedImage = event.base64;
  //   console.log(this.croppedImageEvent);
  // }

}
