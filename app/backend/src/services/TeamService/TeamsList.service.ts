import ITeamsService from './TeamsImplemetation/ITeams.service';
import ObjError from '../../middlewares/objError';
// import ITeamsDTO from './teamsDTO.service';

export default class TeamsListService {
  constructor(
    private teamsService: ITeamsService,
  ) {}

  async executeListAll() {
    const resultListAll = await this.teamsService.listAll();
    return resultListAll;
  }

  async executeFindById(id: number) {
    const resultFindById = await this.teamsService.findById(id);
    if (!resultFindById) throw new ObjError(401, 'Not Found');
    return resultFindById;
  }
}
