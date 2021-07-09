import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { ToolService } from 'src/app/_services/tool.service';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {

  toolForm = this.fb.group({
    toolName: [null, Validators.required],
    rentalPrice: [null, Validators.required],
  });
  constructor(public fb: FormBuilder, public toolService: ToolService, public toastr: ToastrService,
      public authService: AuthService) { }

  ngOnInit() {
  }

  addTool() {
    var model = this.toolForm.value;
    model.renterId = this.authService.decodedToken.nameid;
    this.toolService.addTool(model).subscribe(res => {
      console.log(res);
      this.toastr.success('Tool succsessfully added');
    }, error => {
      console.log(error);
      this.toastr.error('Problem adding tool');
    });
  }
}
