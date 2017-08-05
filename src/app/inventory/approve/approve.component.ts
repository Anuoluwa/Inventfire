import { Component, OnInit } from '@angular/core';
import { InventorService } from "app/inventory/inventor.service";
import { Observable } from "rxjs/Rx";
import { Item  } from '../inventory.model';
import { Request, RequestItem } from '../request.model';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
  requests$: Observable<RequestItem[]> ;

  constructor(private inventorService: InventorService) { 
    this.requests$ = inventorService.getItemsByStatus('new');
  }

  ngOnInit() {
  }

}
