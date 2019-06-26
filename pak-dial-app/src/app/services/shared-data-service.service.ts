import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SharedDataServiceService {
  private data = {};
  private inc = 0;
  private re : boolean =  true;
  constructor() { }

  setData(option , value)
  {
    this.data[option] = value;
  }
  getData()
  {
    return this.data;
  }
  getDataByOption(option)
  {
    return this.data[option];
  }
  deleteOption(option)
  {
      delete this.data[option]
  }
  getPosition()
  {
      return this.inc;
  }
  setPosition()
  {
    this.inc++;
  }
  isReviewDone()
  {
      return this.re;
  }
  review(option)
  {
    this.re = option;
  }
}