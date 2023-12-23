import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {Service} from '../../service';
import {takeUntil} from 'rxjs/operators';
import {GridComponent} from '../../components/grid/grid.component';

@Component({
  selector: 'app-relation-config',
  templateUrl: './relation-config.component.html',
  styleUrls: ['./relation-config.component.scss']
})
export class RelationConfigComponent implements OnInit {

  @ViewChild(GridComponent) grid: GridComponent;

  colDefs = [
    { field: "sourceName", headerName: "Názov zdroja" },
    { field: "tableName", headerName: "Názov tabuľky" },
    { field: "schema", headerName: "Schéma" },
    { field: "creationDate", headerName: "Dátum vytvorenia" }
  ];

  constructor(
    private service: Service,
  ) { }

  ngOnInit(): void {
  }


  loadData() {
    this.grid.asyncRowData = this.service.listRelationConfigs();
  }

}
