// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8
// monitoria do carro da ajuda

import { MatchGoal, TMatch } from '../../interfaces/match.interace';
import Team from '../../database/models/team';
import Match from '../../database/models/match';

export default class MatchesService {
  private matchModel = Match;

  async FindAll() {
    const matches = await this.matchModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  }

  async saveNewGame(dataGameInProgress: TMatch) {
    const Game = await this.matchModel.create({ ...dataGameInProgress, inProgress: true });
    return Game;
  }

  async updateNewGame(id: number) {
    await this.matchModel.update({ inProgress: false }, { where: { id } });
  }

  async findByTeam(id: number) {
    const resultMatches = await this.matchModel.findOne({ where: { id } });
    return resultMatches;
  }

  async updateNewScore(id: number, score: MatchGoal) {
    await this.matchModel.update({ ...score }, { where: { id } });
  }
}
