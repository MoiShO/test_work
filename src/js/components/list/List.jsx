/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react';
import {withRouter} from 'react-router'
import i18next from 'i18next';

import Button from '../delButton/index';
import Preloder from '../../../preloader/25.gif';
import stores from '../../store';

@withRouter
@inject('listStore', 'formStore', 'delButtonStore', 'changeFormStore')
@observer
class ItemList extends React.Component {

  state = {
    how_many: 10,
  }

  componentDidMount () {
    const { listStore } =  this.props;
    listStore.allNotes();
  }

  HowMay = (event) => {
    this.setState({ how_many: event.target.value });
  }

  randomData = () => {
    const { listStore } = this.props;
    const { how_many } = this.state;
    listStore.randomNotes({ num: how_many})
  }

  defaultClass (data) {
    if (!data.id) {
      return `notes_list note ${data}`
    } else {
      return `notes_list ${data.addClass} note ${data.id}`
    }
  }

  updateClass (value) {
    this.defaultClass(value)
  }

  render () {
    const {listStore , formStore, delButtonStore, changeFormStore} = this.props

    if (listStore.arcticleHasErrored) {
      return <p className="error">Sorry! There was an error loading the items, try later please.</p>
    }

    if (listStore.arcticleIsLoading) {
      return <img src={Preloder} alt="loading..." />
    }

    const title = (item) =>{
      return(
        <>
          {Number(item.id) === (Number(delButtonStore.noteIsDeleted.id) || Number(changeFormStore.change.id)) ?
            <img src={Preloder} alt="loading..." /> : item.title
          }
        </>
      )
    }

    const button = (item) =>{ 
      return(
        <>
          {Number(item.id) === Number(delButtonStore.noteIsDeleted.id) ? null :
          (
            <>
              <hr className="notes_list separator" />
              <Button
                title={item.title}
                id={item.id}
              />
            </>
          )
          }
        </>
      )
    }

    const randomaizer = () =>{
      return(
        <div className="data">
          <p>{i18next.t('list_empty')}</p>
          <button
            type="button"
            className="note btn_show_detail btn btn-success btn-sm"
            onClick={this.randomData}
          >
            O_O
          </button>
          <input
            type="text"
            className="form-control input_inline"
            placeholder=' How much'
            onChange={this.HowMay} 
          />
        </div>
      )
    }

    return (
      <div>
        <ul className="notes_list">
          {Array.from(listStore.list).length > 0 ? listStore.list.map((item) => (
            <li key={item.id} className="notes_list note">
              {title(item)}
              {button(item)}
            </li> 
          )) : randomaizer()}
          {formStore.arcticleCreateLoading ? <img src={Preloder} alt="loading..." /> : null}
        </ul>
      </div>
    )
  }
}

ItemList.defaultProps = {
  delButtonStore: stores.delButtonStore,
  listStore: stores.listStore,
  formStore: stores.formStore,
  changeFormStore: stores.changeFormStore,
};

ItemList.propTypes = {
  delButtonStore:  mobxPropTypes.objectOrObservableObject,
  listStore: mobxPropTypes.objectOrObservableObject,
  formStore: mobxPropTypes.objectOrObservableObject,
  changeFormStore: mobxPropTypes.objectOrObservableObject,
}

export default ItemList
