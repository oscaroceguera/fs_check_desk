import React from 'react'
import { bool, func, array, object } from 'prop-types'
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
  static propTypes = {
    modulesTypes: array.isRequired,
    item: object.isRequired,
    submit: bool.isRequired,
    loading: bool.isRequired,
    setItemFields: func.isRequired,
    selectedModule: func.isRequired,
    setSavedItem: func.isRequired,
    setUpdateItem: func.isRequired
  }

  render () {
    return (
      <div style={{ paddingLeft: '2em' }}>
        {
          this.props.loading
            ? <CircularLoading />
            : <ItemsForm
                {...this.props}
                selectChange={(event, index, value) => this.props.selectedModule(value)}
                handleErrorText={(section, field, type) => aux.errorTextMessage(this.props[section][field], type)}
                onChangeInput={(e, section) => this.props.setItemFields(section, e.target.name, e.target.value)}
                onSaved={() => this.props.setSavedItem()}
                onUpdate={() => this.props.setUpdateItem()}
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemFormContainer)
