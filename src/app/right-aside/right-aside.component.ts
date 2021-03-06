import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../products.service";

@Component({
  selector: 'app-right-aside',
  templateUrl: './right-aside.component.html',
  styleUrls: ['./right-aside.component.css']
})
export class RightAsideComponent implements OnInit {
  constructor(private productsService: ProductsService) { }
  message: any[];
  ngOnInit() {
    let x = this.productsService.currentMessage.subscribe(message => this.message = message);
    console.log(this.message,'teegfe');
  }
  

}
