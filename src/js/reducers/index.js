import { ADD_ARTICLE, DEL_ARTICLE, CHANGE_ARTICLE } from "../constants/action-types.js";
import { items, arcticleHasErrored, itemsIsLoading } from './items';

const initialState = {
    articles: [],
  };

  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }

    if (action.type === DEL_ARTICLE) {
      return { articles: state.articles.filter((el) => {
        if (el.id != action.payload.id) {
          return el
        }
      })}
    }

    if (action.type === CHANGE_ARTICLE) {
      return { articles: state.articles.filter((el) => {
        if (el.id == action.payload.id) {
          el.title = action.payload.title
          return el
        }
        else {
          return el
        }
      })}
    }

    return state;
  }
  export default rootReducer;