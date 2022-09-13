import Classification from '../../providers/classificador';
import LeaderboardController from '../../controllers/LeaderboardList.controller';
import ILeaderboardMethodo from './ILeaderboardMethodo';
import LeaderboardService from './leaderboard.service';

export const cassification = new Classification();

export const iLeaderboardMethodo = new ILeaderboardMethodo();

export const leaderboardService = new LeaderboardService(
  iLeaderboardMethodo,
  cassification,
);

export const leaderboardController = new LeaderboardController(
  leaderboardService,
);

export default {
  leaderboardService,
  leaderboardController,
};
