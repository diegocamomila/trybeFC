// import { IMatchesDTO } from '../Matches/matchesDTO.service';
import ITeamsDTO from '../TeamService/teamsDTO.service';

export type ILeaderboard = {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
};

export interface ILeaderTeamDTO extends ITeamsDTO {
  leaderTem: ILeaderboard[]
}

export interface ILeader {
  teamName: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}
