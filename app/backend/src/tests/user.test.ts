import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import LoginUserService from '../services/LoginService/LoginUser.service';
import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

  // const validField = {  
  //   email: 'admin@admin.com',
  //   password: 'secret_admin',
  // }

  describe('testando Login', () => {
    describe('testando rota /login', () => {
      it('Se falha caso campo e-mail nao esteja prenchidos', async () => {
        const response = await chai.request(app)
          .post('/login')
          .send({
            email: '',
            password: 'secret_admin'
          }).then((res) => res)
    
          expect(response.status).to.be.equal(400);
        expect(response.body).to.deep.equal({message:'All fields must be filled'});
      });

      it('Se falha caso campo password nao esteja prenchidos', async () => {
        const response = await chai.request(app)
          .post('/login')
          .send({
            email: 'admin@admin.com',
            password: ''
          }).then((res) => res)

        expect(response.status).to.be.equal(400);
        expect(response.body).to.deep.equal({message:'All fields must be filled'});
      });

      it('Se falha caso campo email e password nao esteja prenchidos', async () => {
        const response = await chai.request(app)
          .post('/login')
          .send({
            email: '',
            password: ''
          }).then((res) => res)

        expect(response.status).to.be.equal(400);
        expect(response.body).to.deep.equal({message:'All fields must be filled'});
      });

      it('Se falha caso campo email invaidos', async () => {
        const response = await chai.request(app)
          .post('/login')
          .send({
            email: 'min@admin.com',
            password: 'secret_admin'
          }).then((res) => res)

        expect(response.status).to.be.equal(401);
        expect(response.body).to.deep.equal({message:'Incorrect email or password'});
      });

      it('Se falha caso campo password invaidos', async () => {
        const response = await chai.request(app)
          .post('/login')
          .send({
            email: 'admin@admin.com',
            password: 'secret-admin'
          }).then((res) => res)

        expect(response.status).to.be.equal(401);
        expect(response.body).to.deep.equal({message:'Incorrect email or password'});
      });
    });

    describe('testando rota /login/validate', () => {
        it('Se falha caso tentar login sem token', async () => {
          const response = await chai.request(app)
            .get('/login/validate')
            .send({
              authorization: '',
          }).then((res) => res)
    
        expect(response.body).to.deep.equal({message:'Token not found'});
      });
    });
  });