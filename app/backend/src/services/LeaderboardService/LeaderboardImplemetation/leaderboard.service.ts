// fonte https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8
// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8
// monitoria do carro da ajuda
// fontehttps://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer
// fontehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// fontehttps://pt.stackoverflow.com/questions/493065/como-ordenar-um-array-com-crit%C3%A9rios-de-desempate-caso-um-dos-campos-seja-igual
// fontehttps://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
// fontehttps://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields

import Matches from '../../../database/models/match';
import TeamModel from '../../../database/models/team';
import ILeaderboardService from './ILeaderboard.service';
import { ILeader } from '../LeaderboardDTO.service';
// import statistic from './statisti';

export default class LeaderboardService implements ILeaderboardService {
  private teamModel = TeamModel;

  async listLeaderboard(): Promise<ILeader[]> {
    const teamMatches = await this.teamModel.findAll({
      include: [{
        model: Matches,
        as: 'homeTeam',
        where: { inProgress: false },
      }],
    });
    const result = teamMatches as unknown as ILeader[];
    // const resultStatic = statistic(result);
    console.log(result);
    return result;
  }
}
