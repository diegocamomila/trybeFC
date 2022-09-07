import { TLeaderboard } from '../../interfaces/leaderboard.interface';
import Classification from './classificador';
import ILeaderboardService from './Ileaderboard.service';

export default class LeaderboardServices {
  constructor(
    private landerboarService: ILeaderboardService,
    private cassification = Classification,
  ) {}

  async executeFindAllHome(): Promise<TLeaderboard[]> {
    const resultFindAllHome = await this.landerboarService.FindAllHome();
    const sorted = this.cassification.classific(resultFindAllHome as unknown as TLeaderboard[]);
    return sorted;
  }

  async executeFindAllAway(): Promise<TLeaderboard[]> {
    const resultFindAllAway = await this.landerboarService.FindAllAway();
    const sorted = this.cassification.classific(resultFindAllAway as unknown as TLeaderboard[]);
    return sorted;
  }

  async executeFindAll(): Promise<TLeaderboard[]> {
    const resultFindAllAway = await this.landerboarService.FindAll();
    const sorted = this.cassification.classific(resultFindAllAway as unknown as TLeaderboard[]);
    return sorted;
  }
}
