import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThingModel } from '../../models/thing.model';
import { BackendService, ThingBag } from './../../services/backend.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
  selector: 'any-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent implements OnInit {
  displayedColumns = ['label', 'id', 'rights'];
  dataSource = new MatTableDataSource<ThingModel>();
  nbRows = 10;
  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.backendService.getThings(
            this.paginator.pageIndex * this.nbRows,
            this.nbRows
          ).do(
            () => (this.isLoadingResults = true)
          );
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
}
