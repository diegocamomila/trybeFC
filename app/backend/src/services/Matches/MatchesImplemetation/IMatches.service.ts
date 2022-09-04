import { IGoalsDTO, IMatchesDTO, IMatchesListDTO } from '../matchesDTO.service';

export default interface IMatchesService {
  listAll(): Promise<IMatchesListDTO[]>
  saveNewGame(data:IMatchesDTO): Promise<IMatchesDTO>
  updateNewGame(id: number): Promise<void>
  findByTeam(id: number): Promise<IMatchesDTO | null>
  updateNewScore(id: number, score: IGoalsDTO): Promise<void>
}
