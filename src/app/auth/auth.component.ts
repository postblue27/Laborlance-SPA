import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../_helpers/custom-validators';
import { AuthService } from '../_services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { RolesService } from '../_services/roles.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  model: any;
  loginForm = this.fb.group({
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

  registerForm = this.fb.group({
    roleName: [null, Validators.required],
    username: [null, Validators.required],
    password: [null, Validators.compose([
      Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    ],
    confirmPassword: [null, Validators.required],
  },
  {
    validator: CustomValidators.passwordMatchValidator
  });

  userRoles : any;

  constructor(private fb: FormBuilder, private authService: AuthService,
    public toastr: ToastrService, private router: Router,
    private rolesService: RolesService) { }

  ngOnInit() {
    this.getUserRoles();
  }

  getUserRoles() {
    this.rolesService.getRoles().subscribe( response => {
      this.userRoles = response;
    }, error => {
      console.log('Error retrieving roles.');
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(response => {
      this.toastr.success('Logged In');
    }, error => {
      this.toastr.error('Failed to login: ' + error.error);
    }, () => {
      if(this.authService.getDecodedToken().role === 'Admin')
      this.router.navigate(['/admin']);
      if(this.authService.getDecodedToken().role === 'Customer')
      this.router.navigate(['/customer']);
      if(this.authService.getDecodedToken().role === 'Renter')
      this.router.navigate(['/renter']);
      if(this.authService.getDecodedToken().role === 'Worker')
      this.router.navigate(['/worker']);
    });
  }

  register() {
    console.log(this.registerForm.value);
    
    this.authService.register(this.registerForm.value).subscribe(response => {
      console.log(response);
      this.toastr.success('Successfully Signed Up');
      // this.router.navigateByUrl('/dashboard');
      
    }, error => {
      this.toastr.error('Error Signing Up');
      console.log(error);
    });
  }

}
