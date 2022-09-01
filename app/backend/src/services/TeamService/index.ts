import TeamsListController from '../../controllers/TeamsList.controller';
import TeamsListService from './TeamsList.service';
import TeamsService from './TeamsImplemetation/teans.service';

const teamsService = new TeamsService();

export const teamsListService = new TeamsListService(
  teamsService,
);

export const teamsListController = new TeamsListController(
  teamsListService,
);

export default {
  teamsListService,
  teamsListController,
};
