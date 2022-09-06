import { NextFunction, Request, Response } from 'express';
import MatchService from '../services/Matches/match.service';

export default class MatchesListController {
  constructor(
    private matchService: MatchService,
  ) {}

  async handlerFindAll(request: Request, response: Response, next: NextFunction) {
    try {
      const matches = await this.matchService.executeFindAll();
      return response.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  }

  async handlerAddMatch(request: Request, response: Response, next: NextFunction) {
    try {
      const { authorization } = request.headers;
      const addMatch = await this.matchService.executeAddMatch(request.body, authorization);
      return response.status(201).json(addMatch);
    } catch (error) {
      next(error);
    }
  }

  async handlerFinishMath(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      await this.matchService.executeFinishMath(Number(id));
      return response.status(200).json({ message: 'Finished' });
    } catch (err) {
      next(err);
    }
  }

  async handlerUpdate(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      await this.matchService.executeUpdate(Number(id), request.body);
      return response.status(200).json({ message: 'Finished' });
    } catch (err) {
      next(err);
    }
  }
}
