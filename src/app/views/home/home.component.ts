import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import {APIService} from '../../services';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactusInForm: FormGroup;
  isValid : boolean = false;
  message : string = "";
  constructor(private router: Router, private apiService: APIService) {
    
  }

  ngOnInit() {
    this.contactusInForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'number': new FormControl(null, [Validators.required]),
      'message': new FormControl(null, [Validators.required]),
      'Purpose': new FormControl('General', [Validators.required]),
    });


  }
  onVideoEnded() {
  }
  login() {
    // {name: "Mourya Anup mourya Bharatnath Mourya", email: "asdsad", number: "07046280268", message: "asdasd", Purpose: "billing"}


  }

  submit(element,contactusInForm){
    this.isValid = true;
    if(!contactusInForm.controls.name.valid){
      this.message = "Full Name is required.";
    }else if(!contactusInForm.controls.email.valid){
      this.message = "Email is required.";
    }else if(!contactusInForm.controls.number.valid){
      this.message = "Number Name is required.";
    }else if(!contactusInForm.controls.message.valid){
      this.message = "Message Name is required.";
    }else if(!contactusInForm.controls.Purpose.valid){
      this.message = "Purpose Name is required.";
    }else{
      this.apiService.AddCountact(contactusInForm.value).subscribe((data : any)=>{
        if(data.status=="true"){
          this.contactusInForm.reset();
          this.message = "Your message has been sent successfully!"
        }else{
          this.message = "Send Failed."
        }
        
      });
    }
  }
}
