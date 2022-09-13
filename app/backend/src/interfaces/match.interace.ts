import ITeam from './team.interface';

export interface MatchGoalDTO {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface MatchDTO {
  id?: number;
  teamName?: string;
  homeTeam: number;
  awayTeam: number;
  inProgress?: boolean;
  teamHome?: ITeam | string;
  awayHome?: ITeam | string;
}
