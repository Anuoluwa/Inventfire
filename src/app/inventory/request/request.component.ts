import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { InventorService } from '../../inventory/inventor.service';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { Item  } from '../inventory.model';
import { Request, RequestItem } from '../request.model';


@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  itemList: Item[];


  constructor(private inventorService: InventorService, private authService: AuthService) {
    inventorService.getAllItems().subscribe(
     data => this.itemList = data
   )
}

  ngOnInit() {
  }
  onRequestItem($key: string) {
   let request = new Request(this.authService.getEmail(),$key,1,'new');
   this.inventorService.requestItem(request);
 }

}
