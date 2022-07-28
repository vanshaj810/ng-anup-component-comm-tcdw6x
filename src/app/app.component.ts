import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  value: boolean = true;
  onToggle() {
    this.value = !this.value;
  }

  // myVal(){
  //   return this.value = this.val
  // }

  productSelected: boolean = false;
  selectedProduct: string;
  addedProduct: string;

  onSelectProduct(product) {
    this.productSelected = true;
    this.selectedProduct = product;
  }
  onAddProduct() {
    this.addedProduct = this.selectedProduct;
  }
}
