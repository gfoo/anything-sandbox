import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatInputModule,
  MatFormFieldModule,
  MatMenuModule,
  MatDividerModule,
  MatTabsModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatDialogModule,
  MatButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonToggleModule
  ],
  declarations: []
})
export class AppMaterialModule {}
