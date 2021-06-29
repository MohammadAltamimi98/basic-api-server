// 'use strict';
// const supertest = require('supertest');
// const { app } = require('../src/server');
// const mockRequest = supertest(app);


// describe('API server', () => {

//   it('right path', async () => {
//     const response = await mockRequest.get('/');
//     expect(response.status).toEqual(200);
//   });

//   it('wrong path', async () => {
//     const response = await mockRequest.get('/bad');
//     expect(response.status).toEqual(404);
//   });

//   it('correct food', async () => {
//     const response = await mockRequest.get('/api/v1/food');
//     expect(response.status).toEqual(200);
//   });

//   it('correct clothes', async () => {
//     const response = await mockRequest.get('/api/v1/clothes');
//     expect(response.status).toEqual(200);
//   });

// });


const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('food test', () => {
  it('Should return name', async () => {
    const response = await mockRequest.get(`/api/v1/food`);
    expect(response.status).toBe(200);
  });
  it('clothes test', async () => {
    const response = await mockRequest.get(`/api/v1/clothes`);
    expect(response.status).toBe(200);
  });
});