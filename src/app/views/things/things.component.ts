import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThingModel } from '../../models/thing.model';
import { BackendService, ThingBag } from './../../services/backend.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'any-things',
  templateUrl: './things.component.html',
  styleUrls: ['./things.component.css']
})
export class ThingsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['label', 'id', 'rights'];
  dataSource = new MatTableDataSource<ThingModel>();
  nbRows = 10;
  resultsLength = 0;
  isLoadingResults = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private backendService: BackendService) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

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
      .subscribe((data: ThingBag) => {
        this.dataSource.data = data.things;
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
