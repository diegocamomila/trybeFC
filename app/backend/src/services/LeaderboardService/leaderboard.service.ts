import { TLeaderboard } from '../../interfaces/leaderboard.interface';
import ILeaderboardService from './Ileaderboard.service';

export default class LeaderboardServices {
  constructor(
    private landerboarService: ILeaderboardService,
  ) {}

  async executeFindAllHome(): Promise<TLeaderboard[]> {
    const resultFindAllHome = await this.landerboarService.FindAllHome();
    return resultFindAllHome;
  }

  async executeFindAllAway(): Promise<TLeaderboard[]> {
    const resultFindAllAway = await this.landerboarService.FindAllAway();
    return resultFindAllAway;
  }
}
