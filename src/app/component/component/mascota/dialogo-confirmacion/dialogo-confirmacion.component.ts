import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-confirmacion',
  templateUrl: './dialogo-confirmacion.component.html',
  styleUrls: ['./dialogo-confirmacion.component.css'],
  template: 'passed in {{ data }}',
})
export class DialogoConfirmacionComponent implements OnInit {
  
  boolea : boolean = false;

  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}, public dialog: MatDialog,
  private dialogRef: MatDialogRef<DialogoConfirmacionComponent>) { }

  ngOnInit(): void {
  //  alert(this.data)
  const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    
  }
  delete() {
    this.dialogRef.close(true);
}

close() {
    this.dialogRef.close(false);
}

 /* openDialog(){
    this.dialog
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ?`
      }) 
    this.dialog.afterClosed().subscribe(

    )
  }*/

}
