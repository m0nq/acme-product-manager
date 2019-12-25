import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  pageTitle: string = 'Product Detail';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` ${id}`;
    this.product = {
      productId: id,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
