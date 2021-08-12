import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';
import { ToolService } from 'src/app/_services/tool.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.scss']
})
export class AddToolComponent implements OnInit {
  baseUrl = environment.apiUrl + 'renter';
  images: any;  
  files: File[] = [];
  toolForm = this.fb.group({
    toolName: [null, Validators.required],
    rentalPrice: [null, Validators.required],
    renterId: [],
    images: []
  });

  fileName = '';
  // public uploader:FileUploader = new FileUploader({url: URL});
  constructor(public fb: FormBuilder, public toolService: ToolService, public toastr: ToastrService,
      public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  addTool() {
    var formData: any = new FormData();
    formData.append("toolName", this.toolForm.get('toolName').value);
    formData.append("rentalPrice", this.toolForm.get('rentalPrice').value);
    formData.append("renterId", this.authService.decodedToken.nameid);
    for(let f of this.files){
      formData.append("images", f);
    }
    this.toolService.addTool(formData).subscribe(res => {
      console.log(res);
      this.toastr.success('Tool succsessfully added');
      this.router.navigateByUrl('/renter/your-tools');
    }, error => {
      console.log(error);
      this.toastr.error('Problem adding tool');
    });
  }

  onFileSelected(event) {
    this.files = Array.from(event.target.files);
  }

  remove(file: File): void {
    console.log(this.files);
    const index = this.files.indexOf(file);

    if (index >= 0) {
      this.files.splice(index, 1);
    }
  }
}
