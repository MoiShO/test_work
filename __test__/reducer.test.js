import {
  arcticleHasErrored,
  arcticleIsLoading,
  arcticleIsDeleted,
  changeLanguage,
  items
} from '../src/js/reducers/item'
import * as t from '../src/js/constants/action-types'

describe('Note reducer bool', () => {
  const state = false

  it('ARTICLE_HAS_ERRORED error false', () => {
    const error = false
    const action = {
      type: t.ARTICLE_HAS_ERRORED,
      hasErrored: error
    }

    expect(arcticleHasErrored(state, action)).toEqual(error)
  })

  it('ARTICLE_IS_LOADING loading true', () => {
    const loading = true
    const action = {
      type: t.ARTICLE_IS_LOADING,
      isLoading: loading
    }

    expect(arcticleIsLoading(state, action)).toEqual(loading)
  })

  it('ARTICLE_IS_DELETED article deleted by id', () => {
    const delObject = { delete: true, id: 2 }
    const actionObject = {
      type: t.ARTICLE_IS_DELETED,
      isDeleted: delObject
    }

    expect(arcticleIsDeleted(state, actionObject)).toEqual(delObject)
    const deleBool = false

    const actionBool = {
      type: t.ARTICLE_IS_DELETED,
      isDeleted: deleBool
    }

    expect(arcticleIsDeleted(state, actionBool)).toEqual(deleBool)
  })
})

describe('Note reducer string', () => {
  it('CHANGE_LANG it was en to become ru', () => {
    const state = 'en'
    const language = 'ru'

    const action = {
      type: t.CHANGE_LANG,
      lang: language
    }

    expect(changeLanguage(state, action)).toEqual(language)
  })
})

describe('Note reducer item', () => {
  const initialState = [ { id: 1, title: 'Give me my bread.' } ]
  const item = { id: 2, title: 'The bread is all over the place.' }

  it('ARTICLE_FETCH_DATA_SUCCESS add data to empty storage', () => {
    const state = []

    const action = {
      type: t.ARTICLE_FETCH_DATA_SUCCESS,
      items: initialState
    }

    expect(items(state, action)).toEqual(initialState)
  })
  it('ADD_ARTICLE', () => {
    const action = {
      type: t.ADD_ARTICLE,
      items: item
    }

    expect(items(initialState, action)).toEqual(initialState.concat(item))
  })

  it('DEL_ARTICLE del article not empty storage', () => {
    const new_initialState = initialState.concat(item)

    const action = {
      type: t.DEL_ARTICLE,
      items: item
    }

    expect(items(new_initialState, action)).toEqual(initialState)
  })

  it('UPDATE_ARTICLE update title by id in storage', () => {
    const item_var = { id: 2, title: '!!!!!!!!!!!!!!!!!!!!!!!' }

    const new_initialState = initialState.concat(item)
    const var_initialState = initialState.concat(item_var)

    const action = {
      type: t.UPDATE_ARTICLE,
      items: item_var
    }

    expect(items(new_initialState, action)).toEqual(var_initialState)
  })
})
