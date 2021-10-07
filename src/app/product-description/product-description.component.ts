import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor( private _productservice:ProductService) { }

  info;
  ngOnInit() {
    this._productservice.getAlbum(1).subscribe(response =>
      this.info = response);
  }

}
