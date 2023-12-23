import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import { PersonalDataTypesComponent } from './tabs/personal-data-types/personal-data-types.component';
import { RelationConfigComponent } from './tabs/relation-config/relation-config.component';
import { AnonymizationComponent } from './tabs/anonymization/anonymization.component';
import {MatCardModule} from '@angular/material/card';
import { GridHeaderComponent } from './components/grid-header/grid-header.component';
import {AgGridModule} from 'ag-grid-angular';
import { GridComponent } from './components/grid/grid.component';
import { AnonymizationConfirmDialogComponent } from './tabs/anonymization/anonymization-configm-dialog/anonymization-confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataTypesComponent,
    RelationConfigComponent,
    AnonymizationComponent,
    GridHeaderComponent,
    GridComponent,
    AnonymizationConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    AgGridModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
