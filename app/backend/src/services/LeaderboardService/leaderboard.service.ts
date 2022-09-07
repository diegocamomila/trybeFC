import Team from '../../database/models/team';
import Match from '../../database/models/match';
import Statistic4 from './statistic';
import { TLeaderboard } from '../../interfaces/leaderboard.interface';

export default class LeaderboardServices {
  constructor(
    private teamModel = Team,
    private matchModel = Match,
  ) {}

  async executeFindAll(): Promise<TLeaderboard[]> {
    const teams = await this.teamModel.findAll();
    const matches = await this.matchModel.findAll();
    const results = teams.map((team) => {
      const board = matches
        .filter((match) => match.homeTeam === team.id && match.inProgress === false)
        .map((match) => ({ goalsFavor: match.homeTeamGoals, goalsOwn: match.awayTeamGoals }));
      return new Statistic4({ teamName: team.teamName, matches: board });
    });
    const sorted = this.executeFindAll.classificador(results);
    return sorted;
  }
}
