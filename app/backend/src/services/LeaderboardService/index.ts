import LeaderboardListController from '../../controllers/LeaderboardList.controller';
import LeaderboardListService from './LeaderboardList.service';
import LeaderboardService from './LeaderboardImplemetation/leaderboard.service';

const leaderboardService = new LeaderboardService();

export const leaderboardListService = new LeaderboardListService(
  leaderboardService,
);

export const leaderboardListController = new LeaderboardListController(
  leaderboardListService,
);

export default {
  leaderboardListService,
  leaderboardListController,
};
