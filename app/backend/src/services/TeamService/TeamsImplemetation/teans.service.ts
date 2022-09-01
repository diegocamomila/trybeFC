// fonte https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8
// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8
// monitoria do carro da ajuda

import Teams from '../../../database/models/team';
import ITeamsDTO from '../teamsDTO.service';
import ITeamsService from './ITeams.service';

export default class TeamsService implements ITeamsService {
  private teamModel = Teams;

  async listAll(): Promise<ITeamsDTO[]> {
    const teams = await this.teamModel.findAll();
    return teams;
  }

  async findById(id: number): Promise<ITeamsDTO | null> {
    const teams = await this.teamModel.findOne({ where: { id } });
    return teams;
  }
}
