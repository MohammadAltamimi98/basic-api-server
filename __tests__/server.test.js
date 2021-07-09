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

  it('test /', async () => {
    const res = await mockRequest.get('/');
    expect(res.text).toBe('We are live.');
  });

  it('test /bad', async () => {
    const res = await mockRequest.get('/bad');
    expect(res.status).toBe(500);
  });

  it('test /not found', async () => {
    const res = await mockRequest.get('/foo');
    expect(res.status).toBe(404);
  });
});

