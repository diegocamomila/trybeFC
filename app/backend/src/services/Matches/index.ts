import MatchesListController from '../../controllers/MatchesList.controller';
import MatchesListService from './matchesList.service';
import MatchesService from './MatchesImplemetation/matches.service';

const matchesService = new MatchesService();

export const matchesListService = new MatchesListService(
  matchesService,
);

export const matchesListController = new MatchesListController(
  matchesListService,
);

export default {
  matchesListService,
  matchesListController,
};
