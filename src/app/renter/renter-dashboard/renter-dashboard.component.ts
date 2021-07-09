import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-renter-dashboard',
  templateUrl: './renter-dashboard.component.html',
  styleUrls: ['./renter-dashboard.component.scss']
})
export class RenterDashboardComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
