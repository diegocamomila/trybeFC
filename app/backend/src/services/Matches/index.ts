import MatchService from './match.service';
import MatchController from '../../controllers/match.controller';
import MatchMethodo from './ImatchMethodo';
import JwtToken from '../../providers/jwtToken';

export const matchMethodo = new MatchMethodo();
export const jwtToken = new JwtToken();

export const matchService = new MatchService(
  matchMethodo,
  jwtToken,
);

export const matchController = new MatchController(
  matchService,
);

export default {
  matchService,
  matchController,
};
