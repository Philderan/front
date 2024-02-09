import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent   {
  listProducts: Product[] =[{
    name: 'Cola',
    description: 'Bebida sin alchol',
    price: 5,
    stock: 200
  },
  {
    name: 'Corona',
    description: 'Bebida alcholica',
    price: 7,
    stock: 50
  }
]
}

