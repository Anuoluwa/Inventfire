import {Request, RequestItem } from './request.model'
export class Item {
    public name: string;
    public cost: number;
    public totalItems: number;
    public availableItems: number;
    public purchaseDate: Date;
    public $key: string;
    public serialNum: string;
    public category: string;
    public comments: string;
    public currency: string;
 
constructor(serialNum: string,name: string, cost: number, totalItems: number
, purchaseDate: Date, category: string, currency: string, comments: string) {
    this.name = name;
    this.cost = cost;
    this.totalItems = totalItems;
    this.serialNum = serialNum;
    this.purchaseDate = purchaseDate;
    this.category = category;
    this.currency = currency;
    this.comments = comments;
}}