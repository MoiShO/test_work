import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../src/js/constants/action-types'
import * as actions from '../src/js/actions/index'
import fetchMock from 'fetch-mock'
import expect from 'expect' // You can use any testing library

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const API = 'http://private-9aad-note10.apiary-mock.com'
const ARI_1 = 'https://private-anon-535510ee6b-note10.apiary-mock.com'

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

    it('delete articles DEL_ARTICLE when select', () => {

      fetchMock.deleteOnce('https://private-anon-535510ee6b-note10.apiary-mock.com/notes/1', {
        body: { id: 1 }
      }).catch(()=> 500)
        
      const expectedActions = [
        { type: types.ARTICLE_IS_DELETED, isDeleted: { delete:true, id: 1}, },
        { type: types.ARTICLE_IS_DELETED, isDeleted: false, },
        { type: types.ARTICLE_HAS_ERRORED, hasErrored: false },
        { type: types.DEL_ARTICLE, items: { id: 1 }}
      ]
      const store = mockStore([])

      return store.dispatch(actions.delArticle({id: 1})).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('add articl ADD_ARTICLE', () => {

      fetchMock.postOnce('https://private-anon-535510ee6b-note10.apiary-mock.com/notes', {
        body: { title: "payload" }
      }).catch(()=> 500)
        
      const expectedActions = [
        { type: types.ARTICLE_HAS_ERRORED, hasErrored: false },
        { type: types.ADD_ARTICLE, items: { title: "payload" }}
      ]
      const store = mockStore([])

      return store.dispatch(actions.addArticle({ title: "payload" })).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    it('change articl UPDATE_ARTICLE when input title', () => {

      fetchMock.putOnce('https://private-anon-535510ee6b-note10.apiary-mock.com/notes/1', {
        body: { id:1, title: "payload" }
      }).catch(()=> 500)
        
      const expectedActions = [
        { type: types.UPDATE_ARTICLE, items: { id:1, title: "payload" }},
        // { type: types.ARTICLE_HAS_ERRORED, hasErrored: false },
      ]
      const store = mockStore([])

      return store.dispatch(actions.changeArticle({ id:1, title: "payload" })).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

  })
})