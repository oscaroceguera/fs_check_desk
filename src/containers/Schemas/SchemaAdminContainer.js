import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../reducers/schemasReducer'
import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaFormContainer from './SchemaFormContainer'
import ModuleFormContainer from './Modules/ModuleFormContainer'
import ModuleListContainer from './Modules/ModuleListContainer'
import ItemFormContainer from './Items/ItemFormContainer'
import ItemListContainer from './Items/ItemListContainer'

// TODO: ELIMIANR MODULO
// TODO: ACTUALIZAR MODULO
// TODO: LISTADO DE MODULOS FAIL

const Modules = () => (
  <div style={{margin: '2em 0', width: '30%'}}>
    <ModuleFormContainer />
    <ModuleListContainer />
  </div>
)

const Items = () => (
  <div style={{maxWidth: '600px', minWidth: '600px', margin: '2em 0'}}>
    <ItemFormContainer />
    <ItemListContainer />
  </div>
)

const ModulesAndItems = () => (
  <div style={{display: 'flex'}}>
    <Modules />
    <Items />
  </div>
)


class SchemaAdminContainer extends React.Component {

  componentWillMount() {
    if (this.props.schema.id !== this.props.params.schemaId) {
      this.props.fetchSchema(this.props.params.schemaId)
    }
  }

  render () {

    return (
      <DashboardWrapper title={'Esquemas'} desc={'Crear Esquema'}>
        <SchemaFormContainer />
        {this.props.schema.id && <ModulesAndItems />}
        {/* <ModulesAndItems /> */}
      </DashboardWrapper>
    )
  }
}

const mapStateToProps = (state, props) => {
  const stateJS = state.schemasReducer.toJS()
  return {
    schema: stateJS.schema,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...Actions
  }, dispatch)
}

// TODO: propTypes
export default connect(mapStateToProps, mapDispatchToProps)(SchemaAdminContainer)
