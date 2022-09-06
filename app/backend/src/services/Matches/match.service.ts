// import { JwtPayload } from 'jsonwebtoken';
import IMatchService from './Imatch.service';
import ObjError from '../../middlewares/objError';
import JwtToken from '../../providers/jwtToken';
import { TMatch, MatchGoal } from '../../interfaces/match.interace';

export default class MatchesListService {
  constructor(
    private matchService: IMatchService,
    private jwtToken = JwtToken,
  ) {}

  async executeFindAll() {
    const reulteGetAllMatches = await this.matchService.FindAll();
    return reulteGetAllMatches;
  }

  async executeAddMatch(data:TMatch, authorization:string | undefined) {
    const resultHomeTeam = await this.matchService.findByTeam(data.homeTeam);
    const resultAwayTeam = await this.matchService.findByTeam(data.awayTeam);

    if (data.homeTeam === data.awayTeam) {
      throw new ObjError(401, 'It is not possible to create a match with two equal teams');
    }
    if (resultHomeTeam === null || resultAwayTeam === null) {
      throw new ObjError(404, 'There is no team with such id!');
    }
    if (!authorization) {
      throw new ObjError(402, 'Token not found');
    }

    // const validation = this.jwtToken.validatePassword(authorization);
    // const { user } = validation as JwtPayload;
    // if (!user) {
    //   throw new ObjError(401, 'Token must be a valid token');
    // }
    const newGameInProgress = await this.matchService.saveNewGame(data);
    return newGameInProgress;
  }

  async executeFinishMath(id: number) {
    await this.matchService.updateNewGame(id);
  }

  async executeUpdate(id: number, score: MatchGoal) {
    await this.matchService.updateNewScore(id, score);
  }
}
