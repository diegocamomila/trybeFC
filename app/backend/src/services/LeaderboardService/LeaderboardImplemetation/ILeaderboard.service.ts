import { ILeader } from '../LeaderboardDTO.service';

export default interface ILeaderboardService {
  listLeaderboard(): Promise<ILeader[]>;
}
