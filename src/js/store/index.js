import {RouterStore} from 'mobx-react-router';

import ButtonDetailsStore from './buttonDetailsStore';
import ChangeFormStore from './changeFormStore';
import DelButtonStore from './delButtonStore';
import FormStore from './FormStore';
import ListStore from './listStore';
import SwitchLanguageStore from './switchLanguagestore';

const routingStore = new RouterStore();

const stores = {
  routing: routingStore,
  buttonDetailsStore: new ButtonDetailsStore(),
  changeFormStore: new ChangeFormStore(),
  delButtonStore: new DelButtonStore(),
  formStore: new FormStore(),
  listStore: new ListStore(),
  switchLanguageStore: new SwitchLanguageStore(),
}

export default stores
