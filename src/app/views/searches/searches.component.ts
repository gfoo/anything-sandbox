import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ThingModel } from '../../models/thing.model';
import { ViewChild } from '@angular/core';
import { BackendService, ThingBag } from '../../services/backend.service';
import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'any-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.css']
})
export class SearchesComponent implements OnInit {
  value = '';

  displayedColumns = ['label', 'id', 'rights'];
  dataSource = new MatTableDataSource<ThingModel>();
  nbRows = 10;
  resultsLength = 0;
  isLoadingResults = true;
  isInit = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private backendService: BackendService) {}

  ngOnInit() {}

  doSearch(searchElt: HTMLElement) {
    this.isInit = true;
    console.log(this.value);
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.backendService
            .searchThings(
              this.value,
              this.paginator.pageIndex * this.nbRows,
              this.nbRows,
              'fulltext'
            )
            .do(() => {
              this.isLoadingResults = true;
            });
        }),
        map((data: ThingBag) => {
          this.isLoadingResults = false;
          this.resultsLength = data.totalCount;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      )
      .subscribe((data: ThingBag) => (this.dataSource.data = data.things));
  }

  onKey(event: any) {
    // without type info
    this.value = event.target.value;
  }
}
