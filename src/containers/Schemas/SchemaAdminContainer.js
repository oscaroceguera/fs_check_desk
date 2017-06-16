import React from 'react'
import { object, bool, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../reducers/Schema/schemaForm'
import { DashboardWrapper } from '../../components'
import { SchemaFormContainer, ModuleFormContainer, ModuleListContainer, ItemListContainer } from '../index'

// MODULE CONTAINER
const Modules = ({modulesLoading}) => (
  <div style={{margin: '2em 0', width: '30%'}}>
    <ModuleFormContainer />
    <ModuleListContainer modulesLoading={modulesLoading} />
  </div>
)

Modules.propTypes = { modulesLoading: bool.isRequired }

// ITEM CONTAINER
const Items = ({itemsLoading}) => (
  <div style={{width: '800px'}}>
    <ItemListContainer itemsLoading={itemsLoading} />
  </div>
)

Items.propTypes = { itemsLoading: bool.isRequired }

// CONTAINER FOR MODULE & ITEM MANAGER
const ModulesAndItems = (props) => (
  <div style={{display: 'flex'}}>
    <Modules {...props} />
    <Items {...props} />
  </div>
)

// MAIN CONTAINER
class SchemaAdminContainer extends React.Component {
  static propTypes = {
    schema: object.isRequired,
    modulesLoading: bool.isRequired,
    itemsLoading: bool.isRequired,
    fetchSchema: func.isRequired
  }

  componentWillMount () {
    if (this.props.schema.id !== this.props.params.schemaId) {
      this.props.fetchSchema(this.props.params.schemaId)
    }
  }

  render () {
    return (
      <DashboardWrapper title={'Esquemas'} desc={'Crear Esquema'}>
        <SchemaFormContainer />
        {this.props.schema.id && <ModulesAndItems {...this.props} />}
      </DashboardWrapper>
    )
  }
}

const mapStateToProps = (state, props) => {
  const stateJS = state.schemasReducer.toJS()
  const modules = state.getModulesReducer.toJS()
  const items = state.getItemsReducer.toJS()
  return {
    schema: stateJS.schema,
    modulesLoading: modules.modulesLoading,
    itemsLoading: items.itemsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...Actions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SchemaAdminContainer)
