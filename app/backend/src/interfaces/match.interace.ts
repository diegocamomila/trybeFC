import ITeam from './team.interface';

export type MatchGoal = {
  homeTeamGoals: number,
  awayTeamGoals: number,
};

export interface IMatcGoal {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export type TMatch = {
  id?: number;
  teamName?: string;
  homeTeam: number;
  awayTeam: number;
  inProgress?: boolean;
  teamHome?: ITeam;
  awayHome?: ITeam;
};

export interface IMatch {
  id?: number;
  teamName?: string;
  homeTeam: number;
  awayTeam: number;
  inProgress?: boolean;
  teamHome?: ITeam | string;
  awayHome?: ITeam | string;
}
