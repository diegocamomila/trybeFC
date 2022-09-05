import IMatchesService from './MatchesImplemetation/IMatches.service';
import ObjError from '../../middlewares/objError';
import { IGoalsDTO, IMatchesDTO, IMatchesListDTO } from './matchesDTO.service';

export default class MatchesListService {
  constructor(
    private matchesService: IMatchesService,
  ) {}

  async executeListAll(): Promise<IMatchesListDTO[]> {
    const reulteGetAllMatches = await this.matchesService.listAll();
    return reulteGetAllMatches;
  }

  async executeSaveInProgress(data:IMatchesDTO): Promise<IMatchesDTO> {
    const resultHomeTeam = await this.matchesService.findByTeam(data.homeTeam);
    const resultAwayTeam = await this.matchesService.findByTeam(data.awayTeam);

    if (data.homeTeam === data.awayTeam) {
      throw new ObjError(401, 'It is not possible to create a match with two equal teams');
    }
    if (resultHomeTeam === null || resultAwayTeam === null) {
      throw new ObjError(404, 'There is no team with such id!');
    }

    // const check(authorization: string | undefined) {
    //   if (!authorization) {
    //     throw new ObjError(401, 'Token must be a valid token');
    //   }

    const newGameInProgress = await this.matchesService.saveNewGame(data);
    return newGameInProgress;
  }

  async executeUpdateInProgress(id: number) {
    await this.matchesService.updateNewGame(id);
  }

  async executeUpdateScore(id: number, score: IGoalsDTO) {
    await this.matchesService.updateNewScore(id, score);
  }
}
