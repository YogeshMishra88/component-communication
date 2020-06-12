import { Component, OnInit,ViewChild } from '@angular/core';

import { ChildComponent } from '../child/child.component';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  msg : string = 'Hello Message from Parent Component !!';
  @ViewChild(ChildComponent) childComp;
  childMsg : string=null;
  childMsgOutput : string=null;
  msgFromService : string = null;

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this.childMsg = this.childComp.childMsg;
    this._dataService.currentMessage.subscribe((data:string)=>{
      this.msgFromService = data;
    })
  }

  dataFromChild(value:string){
    this.childMsgOutput=value;
  }

  changeServiceMessage(){
    this._dataService.changeServiceMsg('Change Service MSG from Parent Component !!');
  }

}
