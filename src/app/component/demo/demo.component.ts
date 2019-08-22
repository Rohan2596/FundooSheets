import { Component, OnInit, HostListener } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { ResizeEvent } from 'angular-resizable-element';

  @Component({
    selector: 'demo-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
  })
   
export class DemoComponent implements OnInit {
  name = 'Angular 6';
  width = 150;
  x = 100;
  oldX = 0;
  grabber = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.grabber) {
        return;
    }
    this.resizer(event.clientX - this.oldX);
    this.oldX = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.grabber = false;
  }
  resizer(offsetX: number) {
    this.width -= offsetX;
  }
  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.grabber = true;
    this.oldX = event.clientX;
  }
  constructor() { }

  ngOnInit() {
  }

}
