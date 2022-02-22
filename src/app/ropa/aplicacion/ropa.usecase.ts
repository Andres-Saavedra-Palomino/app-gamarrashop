import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RopaEntity } from '../dominio/ropa.entity';
import { RopaOperationRepository } from './ropa-operation.repository';

@Injectable()
export class RopaUseCase {
  constructor(private readonly ropaRepository: RopaOperationRepository) {}

  insert(ropa: RopaEntity): Observable<RopaEntity> {
    return this.ropaRepository.insert(ropa);
  }
  update(id: string, ropa: RopaEntity): Observable<RopaEntity> {
    return this.ropaRepository.update(id, ropa);
  }
  delete(id: string): Observable<RopaEntity> {
    return this.ropaRepository.delete(id);
  }
  getAll(): Observable<RopaEntity[]> {
    return this.ropaRepository.getAll();
  }
  getOne(id: string): Observable<RopaEntity> {
    return this.ropaRepository.getOne(id);
  }
  getByPage(page: number): Observable<RopaEntity[]> {
    return this.ropaRepository.getByPage(page);
  }
}
