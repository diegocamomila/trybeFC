// import { JwtPayload } from 'jsonwebtoken';
import MatchMethodo from './ImatchMethodo';
import ObjError from '../../middlewares/objError';
import JwtToken from '../../providers/jwtToken';
import { MatchDTO, MatchGoalDTO } from '../../interfaces/match.interace';

export default class MatchesListService {
  private matchMethodo: MatchMethodo;
  private jwtToken: JwtToken;
  constructor(
    matchService: MatchMethodo,
    jwtToken: JwtToken,
  ) {
    this.matchMethodo = matchService;
    this.jwtToken = jwtToken;
  }

  async executeFindAll() {
    const reulteGetAllMatches = await this.matchMethodo.FindAll();
    return reulteGetAllMatches;
  }

  async executeAddMatch(data:MatchDTO, authorization:string | undefined) {
    const resultHomeTeam = await this.matchMethodo.findByTeam(data.homeTeam);
    const resultAwayTeam = await this.matchMethodo.findByTeam(data.awayTeam);

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
    const newGameInProgress = await this.matchMethodo.saveNewGame(data);
    return newGameInProgress;
  }

  async executeFinishMath(id: number) {
    await this.matchMethodo.updateNewGame(id);
  }

  async executeUpdate(id: number, score: MatchGoalDTO) {
    await this.matchMethodo.updateNewScore(id, score);
  }
}
