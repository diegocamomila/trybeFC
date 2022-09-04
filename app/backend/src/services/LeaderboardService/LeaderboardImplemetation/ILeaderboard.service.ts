import ILeaderboardDTO from '../LeaderboardDTO.service';

export default interface ILeaderboardService {
  listLeaderboard(): Promise<ILeaderboardDTO[]>;
  // findById(id: number): Promise<ITeamsDTO | null>
}
