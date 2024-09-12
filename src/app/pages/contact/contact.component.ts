import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({});
  constructor() {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl(''),
      affair: new FormControl(''),
      message: new FormControl('')
    })
  }

  sendEmail(){
    
  }
}
