// import LeaderboardDTO from '../../interfaces/leaderboard.interface';
import Classification from '../../providers/classificador';
import ILeaderboardMethodo from './ILeaderboardMethodo';

export default class LeaderboardServices {
  private landerboarMethodo: ILeaderboardMethodo;
  private cassification: Classification;
  constructor(
    landerboarMethodo: ILeaderboardMethodo,
    cassification: Classification,
  ) {
    this.landerboarMethodo = landerboarMethodo;
    this.cassification = cassification;
  }

  async executeFindAllHome() {
    const resultFindAllHome = await this.landerboarMethodo.FindAllHome();
    const sorted = this.cassification.classific(resultFindAllHome);
    return sorted;
  }

  async executeFindAllAway() {
    const resultFindAllAway = await this.landerboarMethodo.FindAllAway();
    const sorted = this.cassification.classific(resultFindAllAway);
    return sorted;
  }

  async executeFindAll() {
    const resultFindAllAway = await this.landerboarMethodo.FindAll();
    const sorted = this.cassification.classific(resultFindAllAway);
    return sorted;
  }
}
