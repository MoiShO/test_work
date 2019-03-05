import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../src/js/constants/action-types'
import * as actions from '../src/js/actions/index'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const API = 'http://private-9aad-note10.apiary-mock.com'

describe('Notes Actions', () => {
  describe('async actions', () => {
    afterEach(() => {
      fetchMock.reset()
      fetchMock.restore()
    })

    it('creates ARTICLE_FETCH_DATA_SUCCESS when fetching notes has been done', () => {
      fetchMock.getOnce(`${API}/notes`, {
        headers: { 'content-type': 'application/json' },
        body:  [{id:'1', title: '1'},  {id:'2', title: '2'}] ,
      })

      const expectedActions = [
        { type: types.ARTICLE_IS_LOADING, isLoading: true, },
        { type: types.ARTICLE_IS_LOADING, isLoading: false, },
        { type: types.ARTICLE_HAS_ERRORED, hasErrored: false },
        { type: types.ARTICLE_FETCH_DATA_SUCCESS, items: [{id:'1', title: '1'},  {id:'2', title: '2'}]},
      ]
      const store = mockStore([])

      return store.dispatch(actions.articleFetchData()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})