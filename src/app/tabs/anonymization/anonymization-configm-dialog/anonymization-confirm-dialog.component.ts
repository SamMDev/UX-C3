import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-anonymization-configm-dialog',
  templateUrl: './anonymization-confirm-dialog.component.html',
  styleUrls: ['./anonymization-confirm-dialog.component.scss']
})
export class AnonymizationConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AnonymizationConfirmDialogComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true)
  }

  ngOnInit(): void {
  }

}
