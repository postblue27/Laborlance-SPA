import { HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { OkCancelDialogComponent } from 'src/app/ok-cancel-dialog/ok-cancel-dialog.component';
import { ToolService } from 'src/app/_services/tool.service';

@Component({
  selector: 'app-edit-tool-dialog',
  templateUrl: './edit-tool-dialog.component.html',
  styleUrls: ['./edit-tool-dialog.component.scss']
})
export class EditToolDialogComponent implements OnInit {
  editedTool: any;
  filesToAdd: any;
  constructor(
    public dialogRef: MatDialogRef<EditToolDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {tool: any},
    public dialog: MatDialog, public toolService: ToolService, public toastr: ToastrService) {}
  ngOnInit(): void {
    this.editedTool = this.data.tool;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteToolImage(toolImage: any) {
    console.log(toolImage);
    const dialogRef = this.dialog.open(OkCancelDialogComponent, {
      width: '300px',
      data: {objectToDeleteType: 'image'}
    });
    dialogRef.afterClosed().subscribe(res => {
      this.toolService.deleteToolImage(toolImage.publicId).subscribe(response => {
        // console.log(response);
        this.data.tool = response;
        this.toastr.success('Image deleted');
      })
    })
  }

  getToolById(toolId: any) {
    this.toolService.getToolById(toolId).subscribe(res => {
      console.log(res);
      return res;
    });
  }

  onFileSelected(event) {
    this.filesToAdd = Array.from(event.target.files);
    var formData: any = new FormData();
    for(let f of this.filesToAdd){
      formData.append("images", f);
    }
    formData.append("toolId", this.data.tool.toolId);
    this.toolService.addNewToolImages(formData).subscribe(res => {
      this.data.tool = res;
      this.toastr.success('Images added');
    }, error => {
      console.log(error);
      this.toastr.error('Error adding new images');
    })
  }


  editTool() {
    var editedToolForm = new FormData();
    editedToolForm.append('toolId', this.editedTool.toolId);
    editedToolForm.append('toolName', this.editedTool.toolName);
    editedToolForm.append('rentalPrice', this.editedTool.rentalPrice);
    // editedToolForm.forEach(entry => {
    //   console.log(entry);
    // })
    this.toolService.editTool(editedToolForm).subscribe(res => {
      console.log(res);
    })
  }
}
