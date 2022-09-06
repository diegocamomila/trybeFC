// https://cursos.alura.com.br/forum/topico-usando-map-dentro-de-outro-map-e-possivel-84863

import { ILeader, ILeaderTeamDTO } from '../LeaderboardDTO.service';

export default class statistica2 implements ILeader {
  public teamName: string;
  public totalPoints = 0;
  public totalGames = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency = 0;

  constructor(team: ILeaderTeamDTO) {
    this.teamName = team.teamName;
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
  }

  private tabela(homeTeamGoals: number, awayTeamGoals: number) {
    const result = homeTeamGoals - awayTeamGoals;
    if (result > 0) {
      this.totalPoints += 3; this.totalGames += 1; this.totalVictories += 1;
      this.goalsFavor += homeTeamGoals;
      this.goalsOwn += awayTeamGoals;
    }

    if (result < 0) {
      this.totalGames += 1; this.totalLosses += 1; this.goalsFavor += homeTeamGoals;
      this.goalsOwn += awayTeamGoals;
    }

    if (result === 0) {
      this.totalPoints += 1; this.totalGames += 1; this.totalDraws += 1;
      this.goalsFavor += homeTeamGoals;
      this.goalsOwn += awayTeamGoals;
    }
  }
}
