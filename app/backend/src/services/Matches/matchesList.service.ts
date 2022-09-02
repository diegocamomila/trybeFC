import IMactchesService from './MatchesImplemetation/IMatches.service';
// import ObjError from '../../middlewares/objError';
import { IMatchesListDTO } from './matchesDTO.service';

export default class MatchesListService {
  constructor(
    private matchesService: IMactchesService,
  ) {}

  async executeListAll(): Promise<IMatchesListDTO[]> {
    const reulteGetAllMatchers = await this.matchesService.listAll();
    return reulteGetAllMatchers;
  }
}
