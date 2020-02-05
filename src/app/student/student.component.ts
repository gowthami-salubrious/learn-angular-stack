import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit, AfterViewInit {
  @Input() myInputData: string;
  @Output() myOutputData: EventEmitter<any> = new EventEmitter();
  myOutputString = 'Child to Parent Component';
  // @ViewChild('messageRef', {static: true}) myViewData: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.myViewData.nativeElement.focus();
  }

  sendValuestoParent1(value) {
  //   // this.myOutputData.emit(this.myOutputString);
    this.myOutputData.emit(value);
  }

  sendValuestoParent = (value) => this.myOutputData.emit(value);

}
