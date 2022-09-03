import { NextFunction, Request, Response } from 'express';
import MatchesListService from '../services/Matches/matchesList.service';

export default class MatchesListController {
  constructor(
    private matchesListService: MatchesListService,
  ) {}

  async listAll(request: Request, response: Response, next: NextFunction) {
    try {
      const matches = await this.matchesListService.executeListAll();
      return response.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      // const { dataGameInProgress } = request.body;
      const newGame = await this.matchesListService.gameInProgress(request.body);
      return response.status(201).json(newGame);
    } catch (error) {
      next(error);
    }
  }
}
