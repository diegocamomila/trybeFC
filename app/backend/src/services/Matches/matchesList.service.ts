import IMatchesService from './MatchesImplemetation/IMatches.service';
import ObjError from '../../middlewares/objError';
import { IMatchesDTO, IMatchesListDTO } from './matchesDTO.service';

export default class MatchesListService {
  constructor(
    private matchesService: IMatchesService,
  ) {}

  async executeListAll(): Promise<IMatchesListDTO[]> {
    const reulteGetAllMatchers = await this.matchesService.listAll();
    return reulteGetAllMatchers;
  }

  async gameInProgress(dataGameInProgress:IMatchesDTO): Promise<IMatchesDTO> {
    const homeTeam = await this.matchesService.findByTeam(dataGameInProgress.homeTeam);
    const awayTeam = await this.matchesService.findByTeam(dataGameInProgress.awayTeam);
    if (!homeTeam?.id || !awayTeam?.id) {
      throw new ObjError(404, 'There is no team with such id!');
    } else if (dataGameInProgress.homeTeam === dataGameInProgress.awayTeam) {
      throw new ObjError(
        401,
        'It is not possible to create a match with two equal teams',
      );
    } else {
      const newGameInProgress = await this.matchesService.newGame(dataGameInProgress);
      return newGameInProgress;
    }
  }
}
