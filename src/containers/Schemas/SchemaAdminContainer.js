import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../reducers/schemasReducer'
import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaFormContainer from './SchemaFormContainer'
import ModuleFormContainer from './Modules/ModuleFormContainer'
import ModuleListContainer from './Modules/ModuleListContainer'
import ItemListContainer from './Items/ItemListContainer'

const Modules = ({modulesLoading}) => (
  <div style={{margin: '2em 0', width: '30%'}}>
    <ModuleFormContainer />
    <ModuleListContainer modulesLoading={modulesLoading} />
  </div>
)

// TODO: Modules protypes

const Items = ({itemsLoading}) => (
  <div style={{width: '800px'}}>
    <ItemListContainer itemsLoading={itemsLoading} />
  </div>
)

// TODO: Items protypes

const ModulesAndItems = (props) => (
  <div style={{display: 'flex'}}>
    <Modules {...props} />
    <Items {...props} />
  </div>
)

// TODO: ModulesAndItems protypes

class SchemaAdminContainer extends React.Component {

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

// TODO: propTypes
export default connect(mapStateToProps, mapDispatchToProps)(SchemaAdminContainer)
