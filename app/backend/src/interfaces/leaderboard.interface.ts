export interface LeaderboardDTO {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number
}

export interface TeamMatchDTO {
  teamName: string;
  matches: GoalsDTO[];
}

export interface GoalsDTO {
  goalsFavor: number;
  goalsOwn: number
}
