import React, { Component } from "react";
import i18next from "i18next";
import { changeLanguage } from "../../actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: items => dispatch(changeLanguage(items))
  };
}

class ConnectSwich extends Component {

  constructor(props){
    super(props);
    this.handleSwitchEn = this.handleSwitchEn.bind(this)
    this.handleSwitchRu = this.handleSwitchRu.bind(this)
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
    this.props.changeLanguage('en')
    this.setLanguage('en') 
  }

  handleSwitchRu = () => {
    this.props.changeLanguage('ru')
    this.setLanguage('ru') 
  }
  
  render() {
    return (
      <div>
        <div>
          <button onClick={this.handleSwitchEn}>English</button>
          <button onClick={this.handleSwitchRu}>Русский</button>
        </div>
      </div>
    )
  }
}

const Switch = connect(null, mapDispatchToProps)(ConnectSwich);

export default Switch