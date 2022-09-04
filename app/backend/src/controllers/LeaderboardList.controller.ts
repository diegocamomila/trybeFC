import { NextFunction, Request, Response } from 'express';
import LeaderboardListService from '../services/LeaderboardService/LeaderboardList.service';

export default class LeaderboardListController {
  constructor(
    private leaderboardListService: LeaderboardListService,
  ) {}

  async sort(request: Request, response: Response, next: NextFunction) {
    try {
      const leaderboard = await this.leaderboardListService.executeSort();
      return response.status(200).json(leaderboard);
    } catch (error) {
      next(error);
    }
  }
}
