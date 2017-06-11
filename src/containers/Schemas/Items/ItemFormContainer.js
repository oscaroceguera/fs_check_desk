import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemsActions from '../../../reducers/itemsReducer'
import * as itemActions from '../../../reducers/getItemsReducer'
import aux from '../../../helpers/AuxFunctions'
import ItemsForm from '../../../components/Schema/Item/ItemsForm'
import { orderBy } from 'lodash/collection'
import { everyItems } from '../../../selectors/schemaSelector'
import CircularLoading from '../../../components/Progress/CircularLoading'

class ItemFormContainer extends React.Component {
  onChange = (e, section) =>
    this.props.setItemFields(section, e.target.name, e.target.value)

  onSelect = (event, index, value) =>
    this.props.selectedModule(value)

  errTxt = (section, field, type) =>
    aux.errorTextMessage(this.props[section][field], type)

  onSaved = (e) =>
    this.props.setSavedItem()

  onUpdate = () => {
    this.props.setUpdateItem()
  }

  render () {
    return (
      <div style={{ paddingLeft: '2em' }}>
        {
          this.props.loading
            ? <CircularLoading />
            : <ItemsForm
                {...this.props}
                selectChange={this.onSelect}
                handleErrorText={this.errTxt}
                onChangeInput={this.onChange}
                onSaved={this.onSaved}
                onUpdate={this.onUpdate}
              />
        }
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
    submit: !everyItems(state),
    loading: itemsJS.savedLoading
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...itemsActions, ...itemActions }, dispatch)

// TODO: PROPTYPES

export default connect(mapStateToProps, mapDispatchToProps)(ItemFormContainer)
