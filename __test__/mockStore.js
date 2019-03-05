/* eslint-disable import/no-extraneous-dependencies */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
/* eslint-enable */

export default function createMockStore(initState = {}) {
    const mockStore = configureMockStore([thunk]);
    return mockStore({ ...initState });
}