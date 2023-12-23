import {Component, OnInit, ViewChild} from '@angular/core';
import {Service} from '../../service';
import {GridComponent} from '../../components/grid/grid.component';

@Component({
  selector: 'app-personal-data-types',
  templateUrl: './personal-data-types.component.html',
  styleUrls: ['./personal-data-types.component.scss']
})
export class PersonalDataTypesComponent implements OnInit {

  @ViewChild(GridComponent) grid: GridComponent;

  colDefs = [
    {
      field: "typeName",
      headerName: 'Názov',
    },
    {
      field: "createdBy",
      headerName: 'Vytvorené kým'
    },
    {
      field: "date",
      headerName: 'Dátum vytvorenia',
      filter: 'agDateColumnFilter',
    },
    {
      field: "sensitive",
      headerName: 'Citlivý údaj',
      cellRenderer: (params: any) => {
        return `<input readonly type='checkbox' ${params.value ? 'checked' : ''} />`;
      },
    },
  ];


  constructor(
    private service: Service,
  ) { }

  ngOnInit(): void {
  }


  loadData() {
    this.grid.asyncRowData = this.service.listPersonalDataTypes();
  }

}
