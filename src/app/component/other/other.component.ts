import { Component, OnInit } from '@angular/core';
import { DataService} from '../../service/data.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  serviceMsg : string = null;

  constructor(private _dataService : DataService) { }

  ngOnInit() {

    this._dataService.currentMessage.subscribe((data:string)=>{
      this.serviceMsg = data;
    })
  }

  changeServiceMsg(){
    this._dataService.changeServiceMsg('Change default service message from Other Component !!');
  }

}
