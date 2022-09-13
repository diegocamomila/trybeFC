import TeamService from './team.service';
import TeamController from '../../controllers/team.controller';
import Team from '../../database/models/team';

const team = Team;

export const teamService = new TeamService(
  team,
);

export const teamController = new TeamController(
  teamService,
);

export default {
  teamService,
  teamController,
};
