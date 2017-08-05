import {Item } from './inventory.model'
export class Request {
  public $key: string;
  constructor(public email:string, public itemId:string, public quantity: number, public status: string){}
}

export class RequestItem {
   constructor(public request:Request, public item: Item){}
}