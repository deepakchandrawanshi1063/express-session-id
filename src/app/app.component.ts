
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'express-session-id';

  constructor(private http: HttpClient) { }

  onSubmit(){
    console.log(this.otpData.value);
    this.http.post('https://api-tp.brohit.com/auth/login', this.otpData.value, {withCredentials:true}).subscribe({
      next:response=>{
        console.log(response);

      },
      error:err=>{
        console.log(err);
      }
    })
  }

  otpData = new FormGroup({
    otp:new FormControl('',[Validators.required]),
    phone:new FormControl('',[Validators.required])
  })


 

}
