import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemsActions from '../../../reducers/itemsReducer'
import aux from '../../../helpers/AuxFunctions'
import ItemsForm from '../../../components/Schema/Item/ItemsForm'
import { orderBy } from 'lodash/collection'
import { everyItems } from '../../../selectors/schemaSelector'


class ItemFormContainer extends React.Component {
  onChangeInput = (e, section) => this.props.setItemFields(section, e.target.name, e.target.value)

  selectChange = (event, index, value) => {
    this.props.selectedModule(value)
  }

  handleErrorText = (section, field, type) => {
    const _section = this.props[section]
    return aux.errorTextMessage(_section[field], type)
  }
  onSaved = (e) => {
    console.log('on saved');
  }


  render () {
    return (
      <div style={{paddingLeft: '2em'}}>
        <ItemsForm
          {...this.props}
          selectChange={this.selectChange}
          handleErrorText={this.handleErrorText}
          onChangeInput={this.onChangeInput}
          onSaved={this.onSaved}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const modulesJS = state.getModulesReducer.toJS()
  const itemsJS = state.itemsReducer.toJS()
  return {
    modulesTypes: orderBy(modulesJS.modules, ['order'], ['asc']),
    item: itemsJS.item,
    submit: !everyItems(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...itemsActions
  }, dispatch)
}

// TODO: PROPTYPES

export default connect(mapStateToProps, mapDispatchToProps)(ItemFormContainer)
