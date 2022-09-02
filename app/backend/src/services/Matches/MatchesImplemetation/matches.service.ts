// fonte https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8
// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8
// monitoria do carro da ajuda

import Team from '../../../database/models/team';
import Metches from '../../../database/models/match';
import { IMatchesListDTO } from '../matchesDTO.service';
import IMatchesService from './IMatches.service';
// import ITeamsDTO from '../teamsDTO.service';
// import ITeamsService from './ITeams.service';

export default class MetchesService implements IMatchesService {
  private matchesModel = Metches;

  async listAll(): Promise<IMatchesListDTO[]> {
    const matchers = await this.matchesModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matchers as unknown as IMatchesListDTO[];
  }
}
