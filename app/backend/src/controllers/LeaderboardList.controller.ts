import { NextFunction, Request, Response } from 'express';
import LeaderboardListService from '../services/LeaderboardService/leaderboard.service';

export default class LeaderboardListController {
  constructor(
    private leaderboardListService: LeaderboardListService,
  ) {}

  async handlerFindAll(request: Request, response: Response, next: NextFunction) {
    try {
      const sorted = await this.leaderboardListService.executeFindAll();
      return response.status(200).json(sorted);
    } catch (error) {
      next(error);
    }
  }
}
