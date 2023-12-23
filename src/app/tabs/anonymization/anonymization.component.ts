import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {Service} from '../../service';
import {takeUntil} from 'rxjs/operators';
import {GridComponent} from '../../components/grid/grid.component';
import {MatDialog} from '@angular/material/dialog';
import {
  AnonymizationConfirmDialogComponent
} from './anonymization-configm-dialog/anonymization-confirm-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-anonymization',
  templateUrl: './anonymization.component.html',
  styleUrls: ['./anonymization.component.scss']
})
export class AnonymizationComponent implements OnInit {
  @ViewChild(GridComponent) grid: GridComponent;

  colDefs = [
    {
      checkboxSelection: true,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
      cellClass: 'ag-checkbox-cell',
      cellRendererParams: {
        checkbox: function () {
          return true;
        }
      },
      minWidth: 50,
      width: 50,
      resizable: false,
      sortable: false,
      suppressMenu: true,
      suppressMovable: true,
      suppressSizeToFit: true
    },
    { field: "id", headerName: "Id" },
    { field: "firstName", headerName: "FirstName" },
    { field: "lastName", headerName: "LastName" },
    { field: "birthNumber", headerName: "BirthNumber" }
  ];

  constructor(
    private service: Service,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AnonymizationConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(agreed => {
      if (agreed) {
        this.grid.api?.showLoadingOverlay();
        this.service.listSources().subscribe(res => {
          this.grid.rowData = res;
          this.snackBar.open('Úspešne uložené', 'Rozumiem', {duration: 3000});
        });
      }
    });
  }

  loadData() {
    this.grid.asyncRowData = this.service.listSources();
  }
}
