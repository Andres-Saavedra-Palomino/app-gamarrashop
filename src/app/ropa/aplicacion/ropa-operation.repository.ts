import { Observable } from 'rxjs';
import { RopaEntity } from '../dominio/ropa.entity';

export abstract class RopaOperationRepository {
  abstract insert(ropa: RopaEntity): Observable<RopaEntity>;
  abstract update(id: string, ropa: RopaEntity): Observable<RopaEntity>;
  abstract delete(id: string): Observable<RopaEntity>;
  abstract getAll(): Observable<RopaEntity[]>;
  abstract getOne(id: string): Observable<RopaEntity>;
  abstract getByPage(page: number): Observable<RopaEntity[]>;
}
