import { observable, action} from 'mobx';
import api from './api';

export default class ListStore {
  @observable load = false;

  @observable title = '';

  @observable arcticleIsLoading = false;

  @observable arcticleHasErrored = false

  @observable list = [];

  @action.bound
  addListNewNote(data) {
    this.list = observable.array(this.list.concat(data[data.length-1]), { deep: false })
  }

  @action.bound
  delListNote(data) {
    this.list.replace(this.list.filter((el) => Number(el.id) !== Number(data.id)))
  }

  @action.bound
  changeArticle(data) {
    this.list.replace(
      this.list.filter((el) => {
        if (el.id == Number(data.id)) {
        el.title = data.title
        return el
        } else { return el }
      })
    )
  }

  @action.bound
  allNotes() {
    if(this.load === false) {
      this.arcticleIsLoading = true
      this.load = true;

      // const url = 'http://private-9aad-note10.apiary-mock.com/notes'
      const url = `${api.getNotes.endPoint}`
  
      return fetch(url).then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        this.arcticleIsLoading = false
        this.arcticleHasErrored = false
  
        return response
      })
      .then((response) => response.json())
      .then((items)=> this.list = items)
      .catch(() => this.arcticleHasErrored = true)
    }
  }

  @action.bound
  randomNotes(data) {
      this.arcticleIsLoading = true
      this.load = true;

      // const url = 'http://private-9aad-note10.apiary-mock.com/notes'
      const url = `${api.getNotes.endPoint}/random/${data.num}`
  
      return fetch(url).then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        this.arcticleIsLoading = false
        this.arcticleHasErrored = false
  
        return response
      })
      .then((response) => response.json())
      .then((items)=> this.list = observable.array(this.list.concat(items), { deep: false }))
      .catch(() => this.arcticleHasErrored = true)
  }
}
