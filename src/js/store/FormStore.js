import { observable, action} from 'mobx';
import api from './api';

export default class FormStore {
  @observable load = false;

  @observable title = '';

  @observable arcticleCreateLoading = false;

  @observable arcticleHasErrored = false

  @observable newList = [];

  @observable message = false;

  @action
  handleChangeList(data) {
    this.newList = data
  }

  @action.bound
  handleChangeMessage(bool) {
    this.message = bool
  }

  @action.bound
  handleChangeTitle(data) {
    this.title = data
  }

  @action.bound
  getTitle() {
    return this.title
  }

  @action.bound
  async addArticle (data) {
      // const url = 'https://private-anon-535510ee6b-note10.apiary-mock.com/notes'
      const url = api.addNote.endPoint
      

      this.handleChangeMessage(false)
      this.arcticleCreateLoading = true
  
      return fetch(url,
        {
          method: api.addNote.method,
          body: JSON.stringify({ title: data.title })
        })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText)
          }

          this.arcticleCreateLoading = false
          this.arcticleHasErrored = false

          return response.json()
        })
        .then((items)=> this.handleChangeList(items))
        .catch(() => this.arcticleHasErrored = true)
    }
  }
