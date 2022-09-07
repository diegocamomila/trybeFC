import Team from '../../database/models/team';
import Match from '../../database/models/match';
import Statistic4 from './statistic4';
import { TLeaderboard } from '../../interfaces/leaderboard.interface';
import Classification from './classificador';

export default class ILeaderboardService {
  constructor(
    private teamModel = Team,
    private matchModel = Match,
    private cassification = Classification,
  ) {}

  async FindAllHome(): Promise<TLeaderboard[]> {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findAll();
    const results = teams.map((team) => {
      const board = matches
        .filter((match) => match.homeTeam === team.id && match.inProgress === false)
        .map((match) => ({ goalsFavor: match.homeTeamGoals, goalsOwn: match.awayTeamGoals }));
      return new Statistic4({ teamName: team.teamName, matches: board });
    });
    const sorted = this.cassification.classific(results as unknown as TLeaderboard[]);
    return sorted;
  }

  async FindAllAway(): Promise<TLeaderboard[]> {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findAll();
    const results = teams.map((team) => {
      const board = matches
        .filter((match) => match.awayTeam === team.id && match.inProgress === false)
        .map((match) => ({ goalsFavor: match.awayTeamGoals, goalsOwn: match.homeTeamGoals }));
      return new Statistic4({ teamName: team.teamName, matches: board });
    });
    const sorted = this.cassification.classific(results as unknown as TLeaderboard[]);
    return sorted;
  }
}
