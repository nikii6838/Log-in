import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// dialog component

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent {
  education:string[]= [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post-Graduate'

  ]
  constructor() {}

  
}
