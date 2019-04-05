import { observable, action} from 'mobx';

export default class SwitchLanguageStore {
  @observable lang = 'en';

  @action.bound
  changeLanguage (language) {
    return this.lang = language
  }
}
