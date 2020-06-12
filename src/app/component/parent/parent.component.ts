import { Component, OnInit,ViewChild } from '@angular/core';

import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msg : string = 'Hello Message from Parent Componenet !!';
  @ViewChild(ChildComponent) childComp;
  childMsg : string=null;
  childMsgOutput : string=null;

  constructor() { }

  ngOnInit() {
    this.childMsg = this.childComp.childMsg;
  }

  dataFromChild(value:string){
    this.childMsgOutput=value;
  }

}
