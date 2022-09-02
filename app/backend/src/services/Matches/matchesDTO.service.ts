export interface IGoalsDTO {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

export interface IMatchesDTO extends IGoalsDTO{
  id?: number;
  homeTeam: number;
  awayTeam: number;
  inProgress?: boolean;
}

export interface IMatchesListDTO extends IGoalsDTO{
  inProgress: boolean;
  teamHome: { teamName: string };
  teamAway: { teamName: string };
}
