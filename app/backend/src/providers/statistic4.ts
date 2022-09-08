import { IGoals, ITeamMatch } from '../interfaces/leaderboard.interface';

export default class Statistic4 {
  public name: string;
  public totalPoints: number;
  public totalGames: number;
  public totalVictories: number;
  public totalDraws: number;
  public totalLosses: number;
  public goalsFavor: number;
  public goalsOwn: number;
  public goalsBalance: number;
  public efficiency: number;

  constructor({ teamName, matches }: ITeamMatch) {
    this.name = teamName;
    this.totalGames = matches.length;
    this.totalPoints = Statistic4.calcPoints(matches);
    this.totalVictories = Statistic4.calcVictories(matches);
    this.totalDraws = Statistic4.calcDraws(matches);
    this.totalLosses = Statistic4.calcLosses(matches);
    this.goalsFavor = Statistic4.calcGoalsFavor(matches);
    this.goalsOwn = Statistic4.calcGoalsOwn(matches);
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = Number(((this.totalPoints / (matches.length * 3)) * 100).toFixed(2));
  }

  static calcPoints(matches: IGoals[]) {
    return matches.reduce((totalPoints, match) => {
      if (match.goalsFavor > match.goalsOwn) return totalPoints + 3;
      if (match.goalsFavor === match.goalsOwn) return totalPoints + 1;
      return totalPoints;
    }, 0);
  }

  static calcVictories(matches: IGoals[]) {
    return matches.reduce((totalVictories, match) => {
      if (match.goalsFavor > match.goalsOwn) return totalVictories + 1;
      return totalVictories;
    }, 0);
  }

  static calcDraws(matches: IGoals[]) {
    return matches.reduce((totalDraws, match) => {
      if (match.goalsFavor === match.goalsOwn) return totalDraws + 1;
      return totalDraws;
    }, 0);
  }

  static calcLosses(matches: IGoals[]) {
    return matches.reduce((totalLosses, match) => {
      if (match.goalsFavor < match.goalsOwn) return totalLosses + 1;
      return totalLosses;
    }, 0);
  }

  static calcGoalsFavor(matches:IGoals[]) {
    return matches.reduce((goalsFavor, match) => goalsFavor + match.goalsFavor, 0);
  }

  static calcGoalsOwn(matches: IGoals[]) {
    return matches.reduce((goalsOwn, match) => goalsOwn + match.goalsOwn, 0);
  }
}
