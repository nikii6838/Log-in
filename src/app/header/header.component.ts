import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   constructor (private dialog: MatDialog){

   }
   openDialog(): void {
    this.dialog.open(EmpAddEditComponent, {
     
    });
  }
}
