import { IMatchesDTO } from '../../Matches/matchesDTO.service';

let totalPoints = 0;
let totalGames = 0;
let totalVictories = 0;
let totalDraws = 0;
let totalLossers = 0;
let goalsFavor = 0;
let goalsOwn = 0;
let goalsBalancy = 0;

const statistic = (data: IMatchesDTO) => {
  const result = data.homeTeamGoals - data.awayTeamGoals;

  if (result > 0) {
    totalPoints += 3; totalGames += 1; totalVictories += 1; goalsFavor += data.homeTeamGoals;
    goalsOwn += data.awayTeamGoals; goalsBalancy += result;
  }
  if (result < 0) {
    totalGames += 1; totalLossers += 1; goalsFavor += data.homeTeamGoals;
    goalsOwn += data.awayTeamGoals; goalsBalancy += result;
  }
  if (result === 0) {
    totalPoints += 1; totalGames += 1; totalDraws += 1; goalsFavor += data.homeTeamGoals;
    goalsOwn += data.awayTeamGoals; goalsBalancy += result;
  }
  const efficiency = (totalPoints / (totalGames * 3)) * 100;

  return [totalPoints, totalGames, totalVictories, totalDraws,
    totalLossers, goalsFavor, goalsOwn, goalsBalancy, efficiency];
};
export default statistic;
