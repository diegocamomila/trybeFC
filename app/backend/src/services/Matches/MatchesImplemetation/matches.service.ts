// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8
// monitoria do carro da ajuda

import Team from '../../../database/models/team';
import Matches from '../../../database/models/match';
import { IMatchesDTO, IMatchesListDTO } from '../matchesDTO.service';
import IMatchesService from './IMatches.service';
// import ITeamsDTO from '../../TeamService/teamsDTO.service';

export default class MatchesService implements IMatchesService {
  private matchesModel = Matches;
  private teamModel = Team;

  async listAll(): Promise<IMatchesListDTO[]> {
    const matchers = await this.matchesModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matchers as unknown as IMatchesListDTO[];
  }

  // async findByTeam(idteam: number): Promise< ITeamsDTO | null> {
  //   const result = await this.teamModel.findOne({ where: { id: idteam } });
  //   console.log(`${result}teste`);
  //   return (result);
  // }

  async newGame(dataGameInProgress:IMatchesDTO): Promise<IMatchesDTO> {
    const Game = await this.matchesModel.create({ ...dataGameInProgress, inProgress: true });
    return Game;
  }
}
