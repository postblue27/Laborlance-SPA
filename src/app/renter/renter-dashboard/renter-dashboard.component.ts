import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-renter-dashboard',
  templateUrl: './renter-dashboard.component.html',
  styleUrls: ['./renter-dashboard.component.scss']
})
export class RenterDashboardComponent implements OnInit {

  links = ['add-tool', 'your-tools'];
  activeLink = this.links[0];
  background = 'primary';
  constructor(public authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.
    this.activeLink = this.route.firstChild.snapshot.url.toString();
    // console.log(this.route.firstChild.snapshot..toString());
  }

}
