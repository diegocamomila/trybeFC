import { IMatchesDTO, IMatchesListDTO } from '../matchesDTO.service';
// import ITeamsDTO from '../../TeamService/teamsDTO.service';

export default interface IMatchesService {
  listAll(): Promise<IMatchesListDTO[]>
  // findByTeam(team: number): Promise< ITeamsDTO | null>
  newGame(dataGameInProgress:IMatchesDTO): Promise<IMatchesDTO>
}
