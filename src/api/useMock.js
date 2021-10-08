import MockAdapter from 'axios-mock-adapter';
import mocks from './mocks.json';

const utilizeMock = (axios) => {
  const mock = new MockAdapter(axios);

  mock.onGet(/all-users/).reply(200, mocks);
  mock.onGet(/single-user/).reply(200, mocks.users[0]);
  mock.onGet(/get-new-code/).reply(200, mocks.newPatientCode[Math.floor(Math.random() * 10)]);
};

export default utilizeMock;