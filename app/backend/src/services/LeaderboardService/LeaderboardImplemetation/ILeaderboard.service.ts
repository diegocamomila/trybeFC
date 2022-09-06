import statistica3 from './statistica3';

export default interface ILeaderboardService {
  listLeaderboard(): Promise<statistica3[]>;
}
