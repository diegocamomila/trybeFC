import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;
  describe('testando Matches', () => {
    describe('testando rota /matches', () => {
      it('Se recebe lista', async () => {
        const response = await chai.request(app)
          .get('/matches')
          .send([
            {
              "id": 41,
              "homeTeam": 16,
              "homeTeamGoals": 2,
              "awayTeam": 9,
              "awayTeamGoals": 0,
              "inProgress": true,
              "teamHome": {
                "teamName": "São Paulo"
              },
              "teamAway": {
                "teamName": "Internacional"
              }
            },
            {
              "id": 42,
              "homeTeam": 6,
              "homeTeamGoals": 1,
              "awayTeam": 1,
              "awayTeamGoals": 0,
              "inProgress": true,
              "teamHome": {
                "teamName": "Ferroviária"
              },
              "teamAway": {
                "teamName": "Avaí/Kindermann"
              }
            }  
          ]).then((res) => res)
    
        expect(response.status).to.be.equal(200);
        
      });      
    });

    describe('testando rota /:id/finish', () => {
        it('Se falha caso tentar login sem token', async () => {
          const response = await chai.request(app)
            .get('/:id/finish')
            .send({
              message: 'Finished'
          }).then((res) => res)
        expect(response.status).to.be.equal(200);
        expect(response.body).to.deep.equal({message:'Finished'});
      });
    });
  });