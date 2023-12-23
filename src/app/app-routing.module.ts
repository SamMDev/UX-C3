import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalDataTypesComponent} from './tabs/personal-data-types/personal-data-types.component';
import {RelationConfigComponent} from './tabs/relation-config/relation-config.component';
import {AnonymizationComponent} from './tabs/anonymization/anonymization.component';

const routes: Routes = [
  { path: '', redirectTo: 'types', pathMatch: 'full' },
  { path: 'types', component: PersonalDataTypesComponent },
  { path: 'relations', component: RelationConfigComponent },
  { path: 'anonymization', component: AnonymizationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
