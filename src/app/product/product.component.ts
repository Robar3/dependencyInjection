import { Component } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {


  productForm= new FormGroup({
    id:new FormControl(''),
    name:new FormControl('',[Validators.required,Validators.minLength(4)]),
    price:new FormControl('',[Validators.required,Validators.min(0)]),
    categories:new FormControl([])
  });


  randomId(){
    let id:String='';
    for (let i = 0; i < 10; i++) {
      id+=String(Math.floor(Math.random() *10));
    }
    return id;
  }
  generateId() {
    this.productForm.patchValue({
      id:this.randomId()
    });
  }

  onSubmit(){
    if (this.productForm.valid){
      console.log(this.productForm.value);
    }else {
      alert('Форма не валидна')
    }

  }
}
