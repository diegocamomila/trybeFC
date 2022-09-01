import { NextFunction, Request, Response } from 'express';
import TeamsListService from '../services/TeamService/TeamsList.service';

export default class TeamsListController {
  constructor(
    private teamsListService: TeamsListService,
  ) {}

  async validateToken(request: Request, response: Response, next: NextFunction) {
    try {
      const teams = await this.teamsListService.executeListAll();
      return response.status(200).json({ teams });
    } catch (error) {
      next(error);
    }
  }

  async findById(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.body;
      const team = await this.teamsListService.executeFindById(id);
      return response.status(200).json(team);
    } catch (err) {
      next(err);
    }
  }
}
