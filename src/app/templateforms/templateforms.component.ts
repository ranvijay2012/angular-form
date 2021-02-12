import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {
  emp: Emp;
  constructor() {
    this.emp = new Emp(1,'','','');
   }

  ngOnInit() {
  }

  onSubmit(formName) {
  // this.emp = formName;
    console.log(this.emp);
  }

}
