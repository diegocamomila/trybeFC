export default interface ITeamsDTO {
  id?: number;
  teamName: string;
}

export interface ITeamsMatches{
  id?: number;
  teamName: string;
  homeTeam: number;
  awayTeam: number;
  inProgress?: boolean;
  homeTeamGoals: number;
  awayTeamGoals: number;
}
