import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RopaOperationRepository } from '../aplicacion/ropa-operation.repository';
import { RopaEntity } from '../dominio/ropa.entity';

@Injectable({
  providedIn: 'root',
})
export class RopaOperation extends RopaOperationRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }
  insert(ropa: RopaEntity): Observable<RopaEntity> {
    throw new Error('Method not implemented.');
  }
  update(id: string, ropa: RopaEntity): Observable<RopaEntity> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Observable<RopaEntity> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<RopaEntity[]> {
    const headers = new HttpHeaders({ authorization: 'Bearer token' });
    return this.http.get<RopaEntity[]>(
      'https://jsonplaceholder.typicode.com/'
    );
  }
  getOne(id: string): Observable<RopaEntity> {
    throw new Error('Method not implemented.');
  }
  getByPage(page: number): Observable<RopaEntity[]> {
    throw new Error('Method not implemented.');
  }
}
