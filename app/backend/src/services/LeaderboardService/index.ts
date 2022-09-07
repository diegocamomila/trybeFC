import LeaderboardController from '../../controllers/LeaderboardList.controller';
import ILeaderboardService from './Ileaderboard.service';
import LeaderboardService from './leaderboard.service';

export const iLeaderboardService = new ILeaderboardService();

export const leaderboardService = new LeaderboardService(
  iLeaderboardService,
);

export const leaderboardController = new LeaderboardController(
  leaderboardService,
);

export default {
  leaderboardService,
  leaderboardController,
};
