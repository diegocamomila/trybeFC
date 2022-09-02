import { IMatchesListDTO } from '../matchesDTO.service';

export default interface IMatchesService {
  listAll(): Promise<IMatchesListDTO[]>
}
