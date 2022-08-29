import { Model, NUMBER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './team';

class Match extends Model {
  public id: number;
  public  homeTeam: number;
  public  awayTeam: number;
  public homeTeamGoals: number;
  public  awayTeamGoals: number;
  public inProgress: boolean;
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
  modelName: 'match',
  timestamps: false,
});

Team.hasMany(Match, { foreignKey: 'homeTeam', as: 'teamHome' });
Team.hasMany(Match, { foreignKey: 'awayTeam', as: 'teamAway' });

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });
