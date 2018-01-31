import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';
import { ThingModel } from '../models/thing.model';
import { $ } from 'protractor';

interface SearchExtSubject {
  obj_id: string;
  value: string[];
  rights: number;
}
interface SearchExtResponse {
  subjects: SearchExtSubject[];
  nhits: number;
}
export interface ThingBag {
  things: ThingModel[];
  totalCount: number;
}

@Injectable()
export class BackendService {
  ONTO_IRI = 'http://www.knora.org/ontology/anything';
  SEARCH_PATH = 'v1/search/';
  SEARCH_TYPE = '?searchtype';
  SHOW_NB_ROWS = 'show_nrows';
  START_AT = 'start_at';
  FILTER_RES_TYPE = 'filter_by_restype';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${environment.baseUrl}/v2/authentication`, {
      email: email,
      password: password
    });
  }

  // http://host/v1/search/searchValue?searchtype=fulltext[&filter_by_restype=resourceClassIRI]
  // [&filter_by_project=projectIRI][&show_nrows=Integer]{[&start_at=Integer]

  searchThings(
    searchValue: string,
    startAt: number,
    nbRows: number,
    searchType: string
  ): Observable<ThingBag> {
    const path =
      this.SEARCH_PATH +
      searchValue +
      this.SEARCH_TYPE +
      '=' +
      searchType +
      '&' +
      this.SHOW_NB_ROWS +
      '=' +
      nbRows +
      '&' +
      this.START_AT +
      '=' +
      startAt +
      '&' +
      this.FILTER_RES_TYPE +
      '=' +
      encodeURIComponent(this.ONTO_IRI + '#' + 'Thing');
    return this.http
      .get<SearchExtResponse>(environment.baseUrl + '/' + path)
      .map((result: SearchExtResponse) => {
        const barResult: ThingBag = {
          totalCount: result.nhits,
          things: result.subjects.map((subject: SearchExtSubject) => {
            const thingRes: ThingModel = {
              id: subject.obj_id,
              label: subject.value[0],
              rights: subject.rights
            };
            return thingRes;
          })
        };
        return barResult;
      });
  }

  getThings(startAt: number, nbRows: number): Observable<ThingBag> {
    return this.searchThings('', startAt, nbRows, 'extended');
    // const path =
    //   this.SEARCH_PATH +
    //   this.SEARCH_EXTENDED +
    //   '&' +
    //   this.SHOW_NB_ROWS +
    //   '=' +
    //   nbRows +
    //   '&' +
    //   this.START_AT +
    //   '=' +
    //   startAt +
    //   '&' +
    //   this.FILTER_RES_TYPE +
    //   '=' +
    //   encodeURIComponent(this.ONTO_IRI + '#' + 'Thing');
    // return this.http
    //   .get<SearchExtResponse>(environment.baseUrl + '/' + path)
    //   .map((result: SearchExtResponse) => {
    //     const barResult: ThingBag = {
    //       totalCount: result.nhits,
    //       things: result.subjects.map((subject: SearchExtSubject) => {
    //         const thingRes: ThingModel = {
    //           id: subject.obj_id,
    //           label: subject.value[0],
    //           rights: subject.rights
    //         };
    //         return thingRes;
    //       })
    //     };
    //     return barResult;
    //   });
  }
}
