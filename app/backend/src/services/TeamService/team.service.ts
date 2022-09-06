// fonte https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8
// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8
// monitoria do carro da ajuda

import ObjError from '../../middlewares/objError';
import Team from '../../database/models/team';

export default class TeamsService {
  constructor(
    private teamModel = Team,
  ) {}

  async executeFindAll() {
    const teams = await this.teamModel.findAll();
    return teams;
  }

  async executeFindOne(id: number) {
    const resultFindById = await this.teamModel.findOne({ where: { id } });
    if (!resultFindById) throw new ObjError(401, 'Not Found');
    return resultFindById;
  }
}
