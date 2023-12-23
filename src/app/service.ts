import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Service {


  personalDataTypes = [
    { typeName: "Explorer", createdBy: "User A", date: "2023-01-15", sensitive: true },
    { typeName: "Navigator", createdBy: "User B", date: "2023-01-20", sensitive: false },
    { typeName: "Pioneer", createdBy: "User C", date: "2023-02-05", sensitive: true },
    { typeName: "Adventurer", createdBy: "User D", date: "2023-02-10", sensitive: false },
    { typeName: "Voyager", createdBy: "User E", date: "2023-02-15", sensitive: true },
  ];
  relationConfigs = [
    {
      sourceName: "Evidencia fyzických osôb",
      tableName: "Person",
      schema: "per",
      creationDate: "5.11.2023"
    },
    {
      sourceName: "Evidencia veterinárnych lekárov",
      tableName: "Vet",
      schema: "doc",
      creationDate: "6.11.2023"
    },
    {
      sourceName: "Evidencia chirurgov",
      tableName: "Surgeon",
      schema: "doc",
      creationDate: "4.11.2023"
    },
    {
      sourceName: "Evidencia obvodných lekárov",
      tableName: "LocalDoctor",
      schema: "doc",
      creationDate: "1.11.2023"
    }
  ];
  anonymizationData = [
    { id: 1, firstName: "Samuel", lastName: "Molčan", birthNumber: "780123/4560" },
    { id: 2, firstName: "Marián", lastName: "Kotleba", birthNumber: "845506/7891" },
    { id: 3, firstName: "Daniel", lastName: "Lipišč", birthNumber: "920710/5620" },
    { id: 4, firstName: "Robert", lastName: "Fico", birthNumber: "650315/0320" }
  ];

  listPersonalDataTypes(): Observable<any> {
    return of(this.personalDataTypes).pipe(delay(500));
  }

  listRelationConfigs(): Observable<any> {
    return of(this.relationConfigs).pipe(delay(500));
  }

  listSources(): Observable<any> {
    return of(this.anonymizationData).pipe(delay(500));
  }

}
