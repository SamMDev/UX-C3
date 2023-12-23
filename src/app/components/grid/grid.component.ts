import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {ColDef, GridApi, GridOptions} from 'ag-grid-community';
import {AgGridAngular} from 'ag-grid-angular';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, OnDestroy {
  @ViewChild(AgGridAngular) grid: AgGridAngular;

  private destroy$ = new Subject();
  private _rowData: any;

  public readonly defaultColDef: ColDef = {
    filter: true,
    editable: false,
    sortable: true,
  };

  @Input() selectionMode: 'single' | 'multiple' = 'single';

  @Input() colDefs: ColDef[];
  @Input() set rowData(data: any[]) {
    this._rowData = data;
    this.api?.setRowData(data);
    this.api?.sizeColumnsToFit();
  }

  @Input() set asyncRowData(data: Observable<any[]>) {
    this.api?.showLoadingOverlay();
    data.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.rowData = data;
      this.api?.sizeColumnsToFit();
    });
  }

  @Output() gridReady: EventEmitter<any> = new EventEmitter<any>();

  get gridOptions(): GridOptions {
    return this.grid?.gridOptions;
  }

  get api(): GridApi | null | undefined {
    return this.gridOptions?.api;
  }

  get isSelectedRow(): boolean {
    const selected = this.grid?.api?.getSelectedRows();
    if (selected) {
      return selected.length > 0;
    } else {
      return false;
    }
  }


  constructor(
    private elRef: ElementRef,
  ) {
  }

  ngOnInit(): void {
    this.api?.sizeColumnsToFit();
  }

  onGridReady() {
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.api?.sizeColumnsToFit();
      }, 100);
    });

    this.gridReady.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
