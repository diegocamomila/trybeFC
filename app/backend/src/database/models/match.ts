import { Model, NUMBER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './team';

class Match extends Model {
  id!: number;
  homeTeam!: number;
  awayTeam!: number;
  homeTeamGoals!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Match.init({
  homeTeam: {
    type: NUMBER,
  },
  awayTeam: {
    type: NUMBER,
  },
  homeTeamGoals: {
    type: NUMBER,
  },
  awayTeamGoals: {
    type: NUMBER,
  },
  inProgress: {
    type: BOOLEAN,
    defaultValue: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Team.hasMany(Match, { foreignKey: 'homeTeam', as: 'homeTeam' });
Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });

Team.hasMany(Match, { foreignKey: 'awayTeam', as: 'awayTeam' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Match;
