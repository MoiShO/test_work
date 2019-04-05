import React, { Component } from "react";
import i18next from "i18next";
import { inject } from "mobx-react";

@inject('switchLanguageStore')
class ConnectSwich extends Component {

  constructor(props){
    super(props);
    this.handleSwitchEn = this.handleSwitchEn.bind(this)
    this.handleSwitchRu = this.handleSwitchRu.bind(this)
  }

  state = {
    active: "btn_active",
    defaultClassNameEN: "header btn_switch btn_active en",
    defaultClassNameRU: "header btn_switch ru",
  }

  componentWillMount() {
   this.setLanguage();
  }
  
  setLanguage(language) {
    if(!language){
       language = 'en'
    }
    let lang = require(`./${language}.json`)
    i18next.init({
      lng: language,
      resources: lang
    });
  }

  handleSwitchEn = () => {
    this.props.switchLanguageStore.changeLanguage('en')
    this.setLanguage('en')
    this.setState( { defaultClassNameRU: `header btn_switch ru` } )
    this.setState( { defaultClassNameEN: `header btn_switch  ${this.state.active} en` } )
  }

  handleSwitchRu = () => {
    this.props.switchLanguageStore.changeLanguage('ru')
    this.setLanguage('ru')
    this.setState( { defaultClassNameRU: `header btn_switch ${this.state.active} ru` } )
    this.setState( { defaultClassNameEN: `header btn_switch en` } )
  }
  
  render() {
    const {defaultClassNameEN, defaultClassNameRU} = this.state
    return (
      <div className="header switch col-sm-3 offset-sm-6">
          <button className={defaultClassNameEN} onClick={this.handleSwitchEn}>{i18next.t('english')}</button>
          <button className={defaultClassNameRU} onClick={this.handleSwitchRu}>{i18next.t('russian')}</button>
     </div>
    )
  }
}

export default ConnectSwich
