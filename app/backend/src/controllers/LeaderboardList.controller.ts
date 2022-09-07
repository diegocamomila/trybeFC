import { NextFunction, Request, Response } from 'express';
import LeaderboardListService from '../services/LeaderboardService/leaderboard.service';

export default class LeaderboardListController {
  constructor(
    private leaderboardListService: LeaderboardListService,
  ) {}

  async handlerFindAllHome(request: Request, response: Response, next: NextFunction) {
    try {
      const sorted = await this.leaderboardListService.executeFindAllHome();
      return response.status(200).json(sorted);
    } catch (error) {
      next(error);
    }
  }

  async handlerFindAllAway(request: Request, response: Response, next: NextFunction) {
    try {
      const sorted = await this.leaderboardListService.executeFindAllAway();
      return response.status(200).json(sorted);
    } catch (error) {
      next(error);
    }
  }
}
