import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [MatCardModule,TablerIconsModule, MatChipsModule, TablerIconsModule, MatButtonModule, MatIconModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss'
})
export class ProductdetailsComponent implements OnInit  {

  
product: any={
  "idProduct": 1,
  "imgSrc": '/assets/images/products/p1.jpg',
  "imgSrc1": '/assets/images/products/p2.jpg',
  "imgSrc2": '/assets/images/products/p2.jpg',
  "imgSr3": '/assets/images/products/p3.jpg',

  "name": "Product12222",
  "description": "desc",
  "price": 1.33,
  "stockQuantity": 1,
  "idCategory": 1,
  "nameCategory": "Sample Category"
};

  productId: string|null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the route parameter
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', this.productId);

    // Alternatively, subscribe to paramMap for dynamic changes
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      console.log('Product ID:', this.productId);
    });
  }
}
