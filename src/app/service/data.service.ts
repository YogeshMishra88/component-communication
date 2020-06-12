import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private msgService = new BehaviorSubject<string>('Default Message from Serive !!');
  currentMessage = this.msgService.asObservable();

  constructor() { }

  changeServiceMsg(data){
    this.msgService.next(data);
  }
}
