import React, { Component } from "react";
import i18next from "i18next";
import { changeLanguage } from "../actions/index";
import { connect } from "react-redux";
import { withTranslation  } from "react-i18next";

function mapDispatchToProps(dispatch) {
  return {
    changeLanguage: items => dispatch(changeLanguage(items))
  };
}

class ConnectSwich extends Component {


    state = {
        message: "",
    }
  
    componentWillMount() {
      this.setLanguage('en');
    }
  
    setLanguage(language) {
      i18next.init({
        lng: language,
        resources: require(`./${language}.json`)
      });
      this.props.changeLanguage(i18next);
    }
  
    render() {
      return (
        <div>
          <div>
            <button  onClick={this.setLanguage.bind(this, 'en')}>English</button>
            <button  onClick={this.setLanguage.bind(this, 'ru')}>Русский</button>
          </div>
          <p>{i18next.t('test_message')}</p>
        </div>
      )
    }
  }

  const Switch = connect(null, mapDispatchToProps)(ConnectSwich);

  export default withTranslation()(Switch)