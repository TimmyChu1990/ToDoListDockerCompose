const request = require('supertest');
const port = require('./config').port;

const id = (Math.floor(Math.random() * 10000) + 1).toString();
const TestName1 = 'Test Name1';
const TestName2 = 'Test Name2';

test('Create duty', async() => {
    const response = await request('localhost:' + port).post('/createDuty').send({id: id, name: TestName1});
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
    expect(response.body.name).toBe(TestName1);
});

test('Update duty', async() => {
    const response = await request('localhost:' + port).post('/updateDuty').send({id: id, name: TestName2});
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(id);
    expect(response.body.name).toBe(TestName2);
});

test('Delete duty', async() => {
    const response = await request('localhost:' + port).delete('/deleteDuty').send({id: id});
    expect(response.status).toBe(204);
});

test('Get duties', async() => {
    const response = await request('localhost:' + port).get('/duties');
    expect(response.status).toBe(200);
});