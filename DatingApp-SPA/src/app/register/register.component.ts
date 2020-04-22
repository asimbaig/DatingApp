import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      console.log('Registration successfull.');
    }, error => {
      console.log('Failed..Registration');
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
  }

}
