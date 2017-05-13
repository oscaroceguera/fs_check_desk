import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as schemaActions from '../../reducers/schemasReducer'
import { submitSchema } from '../../selectors/schemaSelector'
import aux from '../../helpers/AuxFunctions'

import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaForm from '../../components/Schema/SchemaForm'
import CircularLoading from '../../components/Progress/CircularLoading'

// TODO: CAMBIAR LA RUTA UNA VEZ SE HAY CREADO EL SCEHMA CON SU ID (EDIT/1221-1qwdqw-12-121w)
// TODO: PERSISTENCIA DE DATOS AL AHCER REFRESH
// TODO: SCHEMA FAIL MESSAGE
// TODO: REDUCER PARA GUARDAR ESQUEMA
// TODO: REDUCER PARA GUARDAR MODULOS
// TODO: REDUCER PARA GUARDAR LOS ITEMS
class SchemaFormContainer extends React.Component {

  componentWillMount () {
    this.props.resetFields()
  }

  onChangeInput = (e, section) => {
    this.props.setFields(section, e.target.name, e.target.value)
  }

  handleErrorText = (section, field, type) => {
    const _section = this.props[section]
    return aux.errorTextMessage(_section[field], type)
  }

  saveSchema = (e) => this.props.setSavedSchema()

  updateSchema = (e) => {
    console.log('UPDATE');
  }

  render () {
    return (
      <DashboardWrapper
        title={'Esquemas'}
        desc={'Crear Esquema'}
      >
        {
          this.props.SSLoading
            ? <CircularLoading />
            : <SchemaForm
                item={this.props.schema}
                handleErrorText={this.handleErrorText}
                onChangeInput={this.onChangeInput}
                submitSchema={this.props.submitSchema}
                updateSchema={this.updateSchema}
                saveSchema={this.saveSchema}
              />
        }
      </DashboardWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.schemasReducer.toJS()
  return {
    schema: stateJS.schema,
    submitSchema: !submitSchema(state),
    SSLoading: stateJS.savedSchemasLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...schemaActions
  }, dispatch)
}

// TODO: propTypes
export default connect(mapStateToProps, mapDispatchToProps)(SchemaFormContainer)
