import LeaderboardController from '../../controllers/LeaderboardList.controller';
import LeaderboardService from './leaderboard.service';
import OrderBoard from './order';
import Statistic4 from './statistic';

export const statistic4 = new Statistic4({ teamName, matches });
export const orderBoard = new OrderBoard();

export const leaderboardService = new LeaderboardService(
  statistic4,
  orderBoard,
);

export const leaderboardController = new LeaderboardController(
  leaderboardService,
);

export default {
  leaderboardService,
  leaderboardController,
};
