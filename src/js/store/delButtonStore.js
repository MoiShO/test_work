import { observable, action, computed} from 'mobx';
// import PropTypes from 'prop-types';
import listStore from './listStore';

export default class DelButtonStore {
  @observable DelButtonStoreErrored = false;

  @observable noteIsDeleted = {};

  @observable show;

  constructor() {
    this.show = false;
  }

  @computed get isOpen() {
    return this.show;
  }

  @action.bound
  showList() {
    this.show = !this.show;
  }

  @action
  delArticle (data) {
    let set = { delete: true, id: data.id };
  
    this.noteIsDeleted = set;
  
    const url = `https://private-anon-535510ee6b-note10.apiary-mock.com/notes/${data.id}`;
  
    return fetch(url, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        this.noteIsDeleted = { delete: false };
        this.arcticleHasErrored = false;
      })
      .then(() => listStore.delListNote(data))
      .catch(() => this.DelButtonStoreErrored = true)
  }
}

// DelButtonStore.defaultProps = {
//   noteIsDeleted: {},
//   show: false,
//   DelButtonStoreErrored: false,
// }

// DelButtonStore.PropTypes = {
//   noteIsDeleted: PropTypes.object,
//   show: PropTypes.bool,
//   DelButtonStoreErrored: PropTypes.bool,
// }
