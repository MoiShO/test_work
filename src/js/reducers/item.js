export function arcticleHasErrored (state = false, action) {
  switch (action.type) {
    case 'ARTICLE_HAS_ERRORED':
      return action.hasErrored

    default:
      return state
  }
}

export function arcticleIsLoading (state = false, action) {
  switch (action.type) {
    case 'ARTICLE_IS_LOADING':
      return action.isLoading

    default:
      return state
  }
}

export function items (state = [], action) {
  switch (action.type) {
    case 'ARTICLE_FETCH_DATA_SUCCESS':
      return action.items

    case 'ADD_ARTICLE':
      return state.concat(action.items)

    case 'DEL_ARTICLE':
      return state.filter((el) => el.id != action.items.id)

    case 'UPDATE_ARTICLE':
      return state.filter((el) => {
        if (el.id == action.items.id) {
          el.title = action.items.title
          return el
        } else { return el }
      })

    default:
      return state
  }
}

export function changeLanguage (state = 'en', action) {
  switch (action.type) {
    case 'CHANGE_LANG':
      return action.lang
    default:
      return state
  }
}

export function arcticleIsDeleted (state = false, action) {
  switch (action.type) {
    case 'ARTICLE_IS_DELETED':
      return action.isDeleted

    default:
      return state
  }
}
