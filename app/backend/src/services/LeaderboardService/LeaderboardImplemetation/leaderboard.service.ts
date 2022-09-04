// fonte https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8
// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8
// monitoria do carro da ajuda
// fontehttps://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer
// fontehttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// fontehttps://pt.stackoverflow.com/questions/493065/como-ordenar-um-array-com-crit%C3%A9rios-de-desempate-caso-um-dos-campos-seja-igual
// fontehttps://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
// fontehttps://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields

import MatchesModel from '../../../database/models/match';
import TeamModel from '../../../database/models/team';
import ILeaderboardDTO from '../LeaderboardDTO.service';
import ILeaderboardService from './ILeaderboard.service';

export default class LeaderboardService implements ILeaderboardService {
  private teamModel = TeamModel;
  private matchesModel = MatchesModel;

  async listLeaderboard(): Promise<ILeaderboardDTO[]> {
    const matchers = await this.teamModel.findAll({
      include: [
        { model: this.matchesModel, as: 'awayTeam', where: { inProgress: 0 } },
      ],
    });

    return matchers;
  }

  // async findById(id: number): Promise<ILeaderboardDTO | null> {
  //   const leaderboard = await this.matchesModel.findOne({ where: { id } });
  //   return leaderboard;
  // }
}
