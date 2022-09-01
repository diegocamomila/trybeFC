import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import LoginUserService from '../services/LoginService/LoginUser.service';
// import Users from '../database/models/user';
// import IUserDTO from '../services/LoginService/userDTO.service';
// import HandlerError from '../utils/handlerError';
// import Example from '../database/models/ExampleModel';

// import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;


  const invalidField = {
    email: '',
    password: '',
  }

  const validField = {  
    email: 'admin@admin.com',
    password: 'admin',
  }

  const notRegistred = {
    email: 'admin@admin.com',
    password: '',
  }

  const userRegistred = {
    email: 'admin@admin.com',
    password: 'admin',
  }

  const user = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  }

  describe('Teste Login', async () => {
    it('The Login and Password fields must be filled in', async () => {
      sinon.stub(LoginUserService.prototype, 'execute')
      });
  
      const response = await chai.request(app)
      .post('/login').send(invalidField);
  
      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal([]);
      expect(response.body.message).to.equal('All fields must be filled');
  
      sinon.restore();
    });

    // it('check the Login and Password fields if filled in correctly', async () => {
    //   sinon.stub(LoginUserService.prototype, 'checkUser').resolves(Users as IUserDTO)
    //   });
  
    //   const response = await chai.request(app)
    //   .post('/login').send(validField);
  
    //   expect(response.status).to.be.equal(401);
    //   expect(response.body).to.be.deep.equal([]);
    //   expect(response.body.message).to.equal('Incorrect email or password');
  
    //   sinon.restore();
  

    // it('check if it returns the Token', async () => {
    //   sinon.stub(Users, 'findOne').resolves(user as Users)

    //   });
  
    //   const response = await chai.request(app)
    //   .post('/login').send(validField);
  
    //   expect(response.status).to.be.equal(401);
    //   expect(response.body).to.be.deep.equal([]);
    //   expect(response.body.message).to.equal('Incorrect email or password');
  
    //   sinon.restore();