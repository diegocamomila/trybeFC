import MatchService from './match.service';
import MatchController from '../../controllers/match.controller';
import IMatchService from './Imatch.service';

export const iMatchService = new IMatchService();

export const matchService = new MatchService(
  iMatchService,
);

export const matchController = new MatchController(
  matchService,
);

export default {
  matchService,
  matchController,
};
