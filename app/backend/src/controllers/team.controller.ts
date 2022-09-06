import { NextFunction, Request, Response } from 'express';
import TeamService from '../services/TeamService/team.service';

export default class TeamController {
  constructor(
    private teamService: TeamService,
  ) {}

  async handlerFindAll(request: Request, response: Response, next: NextFunction) {
    try {
      const teams = await this.teamService.executeFindAll();
      return response.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }

  async handlerFindOne(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const teams = await this.teamService.executeFindOne(Number(id));
      return response.status(200).json(teams);
    } catch (err) {
      next(err);
    }
  }
}
