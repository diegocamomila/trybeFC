import statistica2 from './statistica2';

export default interface ILeaderboardService {
  listLeaderboard(): Promise<statistica2[]>;
}
