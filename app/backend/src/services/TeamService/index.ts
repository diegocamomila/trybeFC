import TeamService from './team.service';
import TeamController from '../../controllers/team.controller';

export const teamService = new TeamService();

export const teamController = new TeamController(
  teamService,
);

export default {
  teamService,
  teamController,
};
