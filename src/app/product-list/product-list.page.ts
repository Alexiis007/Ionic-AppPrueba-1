import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { DataAPI, Result } from '../interfaces/data-api';
import { map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  constructor() { }

  private serviceProducts = inject(ProductsService)

  public products:Result[]=[];

   ngOnInit() {
      this.serviceProducts.getAll()
      .subscribe(
        res => {
          this.products = res.results;
        }
      )
      
      
  }

}
