import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule, MatDialogModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
const modules: any[] = [
  MatCardModule,
  MatSnackBarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatBadgeModule,
  MatMenuModule,
  FormsModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
