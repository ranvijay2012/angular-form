import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {
  // profileForm;
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    address:this.fb.group({
      city: [''],
      state: [''],
      zip: ['']
    })
    
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
  }

  

  onSubmit() {
    console.log(this.profileForm.value);
  }

}
