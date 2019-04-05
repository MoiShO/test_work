import { observable, action } from 'mobx';
import listStore from './listStore';

export default class ChangeFormStore {
  @observable changeFormStoreErrored = false;

  @observable noteIsDeleted = {};

  @observable show = false;

  @observable change = false;

  @action
  changeArticle (data) {
    const url = `https://private-anon-535510ee6b-note10.apiary-mock.com/notes/${data.id}`

    const set =  { change: true , id: data.id}

    this.change = set
  
    return fetch(url,
      {
        method: 'PUT',
        body: JSON.stringify({ title: data.title })
      })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        this.change = {change: false}

        return response
      })
    .then(() => {listStore.changeArticle(data)})
    .catch(() => this.changeFormStoreErrored = true)
  }
}
