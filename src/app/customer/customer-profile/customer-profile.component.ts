import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { RolesService } from 'src/app/_services/roles.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  profileForm = this.fb.group({
    roleName: [null, Validators.required],
    username: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required])
    ],
    // address: [null, Validators.required],
    // address2: null,
    // city: [null, Validators.required],
    // userType: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
    // shipping: ['free', Validators.required]
  });
  constructor(private fb: FormBuilder, private authService: AuthService,
    public toastr: ToastrService, private router: Router,
    private rolesService: RolesService) { }

  ngOnInit() {
  }

  editProfile() {
    
  }

}
