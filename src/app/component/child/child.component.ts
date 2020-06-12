import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() MSG;

  childMsg : string="Hello Messge from Child Componenet !!";

  @Output() childEvent = new EventEmitter<string>();

  msgUsingOutput : string= "Hello Message from Child Component using @Output()";

  constructor() { }

  ngOnInit() {
  }

  sendToParent(){
    this.childEvent.emit(this.msgUsingOutput);
  }

}
