import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/_services/admin.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-crud-users',
  templateUrl: './crud-users.component.html',
  styleUrls: ['./crud-users.component.scss']
})
export class CrudUsersComponent implements OnInit {
  
  usersTableSettings = {
    columns: {
      userName: {
        title: 'UserName'
      },
      email: {
        title: 'Email'
      },
      password: {
        title: 'Password',
        editable: false
      }
    },
    mode: 'inline', 
    edit: { confirmSave: true },
    delete: {confirmDelete: true},
    add: {confirmCreate: true}
  };
  workersTableSettings = {
    columns: {
      userName: {
        title: 'UserName'
      },
      email: {
        title: 'Email'
      },
      hourlyWage: {
        title: 'HourlyWage'
      },
      rating: {
        title: 'Rating'
      },
      password: {
        title: 'Password',
        editable: false
      }
    },
    mode: 'inline', 
    edit: { confirmSave: true },
    delete: {confirmDelete: true},
    add: {confirmCreate: true}
  };

  users: any;
  constructor(private adminService: AdminService, private authService: AuthService,
    public toastr: ToastrService, public router: Router, private route: ActivatedRoute) {
      router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('roleName'));
    this.getUsers();
  }

  //TODO getUsersByRole with this.route.snapshot.paramMap.get('roleName')
  getUsers() {
    this.adminService.getUsersByRole(this.route.snapshot.paramMap.get('roleName')).subscribe(response => {
      this.users = response;
      console.log(response);
    }, error => {
      this.toastr.error(error);
    })
  }

  updateUser(e: any) {
    console.log(e.newData);
    this.adminService.updateUser(e.newData).subscribe(response => {
      console.log(response);
      this.getUsers();
      this.toastr.success('User updated');
    }, error => {
      this.toastr.error(error);
    });
  }
  updateWorker(e: any) {
    console.log(e.newData);
    const workerToUpdate = {
      'id': e.newData.id,
      'userName': e.newData.userName,
      'email': e.newData.email,
      'hourlyWage': e.newData.hourlyWage,
      'rating': e.newData.rating
    };
    this.adminService.updateWorker(workerToUpdate).subscribe(response => {
      console.log(response);
      this.getUsers();
      this.toastr.success('User updated');
    }, error => {
      this.toastr.error(error);
    });
  }

  deleteUser(e: any) {
    // console.log(e);
    const userToDelete = {
      'id': e.data.id,
      'userName': e.data.userName,
      'email': e.data.email,
      'concurrencyStamp': e.data.concurrencyStamp
    };
    this.adminService.deleteUser(userToDelete).subscribe(response => {
      this.getUsers();
      this.toastr.success('User deleted');
    }, error => {
      this.toastr.error(error);
    });
  }

  createUser(e: any) {
    // console.log(e);
    const userToCreate = {
      'userName': e.newData.userName,
      'roleName': this.route.snapshot.paramMap.get('roleName'),
      'email': e.newData.email,
      'password': e.newData.password
    };
    // console.log(userToCreate);
    this.authService.register(userToCreate).subscribe(response => {
      this.getUsers();
      this.toastr.success('User created');
    }, error => {
      this.toastr.error('Error creating user');
    });
  }

}
