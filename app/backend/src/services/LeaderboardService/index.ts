import LeaderboardController from '../../controllers/LeaderboardList.controller';
import LeaderboardService from './leaderboard.service';

export const leaderboardService = new LeaderboardService();

export const leaderboardController = new LeaderboardController(
  leaderboardService,
);

export default {
  leaderboardService,
  leaderboardController,
};
