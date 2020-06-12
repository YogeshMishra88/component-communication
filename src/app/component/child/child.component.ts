import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() MSG;

  childMsg : string="Hello Messge from Child Component using @viewChild!!";

  @Output() childEvent = new EventEmitter<string>();

  msgUsingOutput : string= "Hello Message from Child Component using @Output()";

  serviceMsg : string = null;

  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this._dataService.currentMessage.subscribe((data:string)=>{
      this.serviceMsg = data;
    })
  }

  sendToParent(){
    this.childEvent.emit(this.msgUsingOutput);
  }

  changeMsg(){
    this._dataService.changeServiceMsg('Change default service MSG from Child Component !!');
  }

}
