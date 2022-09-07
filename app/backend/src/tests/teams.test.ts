// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';
// // import LoginUserService from '../services/LoginService/LoginUser.service';
// import { Response } from 'superagent';

// chai.use(chaiHttp);

// const { expect } = chai;
//   describe('testando Teams', () => {
//     describe('testando rota /teams', () => {
//       it('Se falha caso campo e-mail nao esteja prenchidos', async () => {
//         const response = await chai.request(app)
//           .post('/teams')
//           .send([
//             {
//               "id": 1,
//               "teamName": "Avaí/Kindermann"
//             },
//             {
//               "id": 2,
//               "teamName": "Bahia"
//             }
//           ]).then((res) => res)
    
//         expect(response.status).to.be.equal(200);
//       });      
//     });

//     describe('testando rota /teams/:id', () => {
//         it('Se falha caso tentar login sem token', async () => {
//           const response = await chai.request(app)
//             .get('/teams/:id')
//             .send({
//               id: '',
//           }).then((res) => res)
//         expect(response.status).to.be.equal(400);
//         expect(response.body).to.deep.equal({message:'Token not found'});
//       });
//     });
//   });