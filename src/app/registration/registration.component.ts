import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistationService } from '../user-registation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  user: User = new User();
  message: any;

  constructor(private service: UserRegistationService, private router: Router) {

  }

  ngOnInit() {
  }


  public registerNow() {
    const resp = this.service.doRegistration(this.user);
    resp.subscribe((data) => this.message = data);
  }

}
