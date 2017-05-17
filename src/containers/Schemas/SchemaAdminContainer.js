import React from 'react'
import { connect } from 'react-redux'

import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaFormContainer from './SchemaFormContainer'
import ModuleFormContainer from './Modules/ModuleFormContainer'
import ModuleListContainer from './Modules/ModuleListContainer'
import ItemFormContainer from './Items/ItemFormContainer'
import ItemListContainer from './Items/ItemListContainer'

// TODO: 2 - Agregar al API con sagas
// TODO: 3 - actulizar datos en el listado de datos
// TODO: 4 - usar listado container y listado component
// TODO: LSITAR MODULOS AGREGADOS
// TODO: ELIMIANR MODULO
// TODO: ACTUALIZAR MODULO
// TODO: LSITADO DE MODULOS NO HAY
// TODO: LISTADO DE MODULOS FAIL

const Modules = () => (
  <div style={{ margin: '2em 0' }}>
    <ModuleFormContainer />
    <ModuleListContainer />
  </div>
)

const Items = () => (
  <div style={{flexGrow: 1, margin: '2em 0', textAlign: 'center'}}>
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
  render () {
    return (
      <DashboardWrapper title={'Esquemas'} desc={'Crear Esquema'}>
        <SchemaFormContainer />
        {/* {this.props.schema.id && <ModulesAndItems />} */}
        <ModulesAndItems />
      </DashboardWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.schemasReducer.toJS()
  return {
    schema: stateJS.schema
  }
}


// TODO: propTypes
export default connect(mapStateToProps)(SchemaAdminContainer)
