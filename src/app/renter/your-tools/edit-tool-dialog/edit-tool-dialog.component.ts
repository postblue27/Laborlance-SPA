import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OkCancelDialogComponent } from 'src/app/ok-cancel-dialog/ok-cancel-dialog.component';
import { ToolService } from 'src/app/_services/tool.service';

@Component({
  selector: 'app-edit-tool-dialog',
  templateUrl: './edit-tool-dialog.component.html',
  styleUrls: ['./edit-tool-dialog.component.scss']
})
export class EditToolDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EditToolDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {tool: any},
    public dialog: MatDialog, public toolService: ToolService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteToolImage(toolImage: any) {
    console.log(toolImage);
    const dialogRef = this.dialog.open(OkCancelDialogComponent, {
      width: '300px',
      data: {objectToDeleteType: 'image'}
    });
  }

  getToolById(toolId: any) {
    this.toolService.getToolById(toolId).subscribe(res => {
      console.log(res);
    });
  }
}
