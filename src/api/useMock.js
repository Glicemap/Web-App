import MockAdapter from 'axios-mock-adapter';
import mocks from './mocks.json';

const utilizeMock = (axios) => {
  const mock = new MockAdapter(axios);

  mock.onGet(/all-users/).reply(200, mocks);
  mock.onGet(/single-user/).reply(200, mocks.users[0]);
  mock.onGet(/get-new-code/).reply(200, mocks.newPatientCode[Math.floor(Math.random() * 10)]);
  mock.onGet(/get-patients/).reply(200, mocks.patients);
  mock.onGet(/get-patient/).reply(200, mocks.patients[0]);
  mock.onGet(/get-notifications/).reply(200, mocks.notifications);
  mock.onPost(/read-notifications/).reply(200, []);
  mock.onDelete(/delete-notifications/).reply(200, []);
  mock.onGet(/get-settings/).reply(200, mocks.settings)
};

export default utilizeMock;