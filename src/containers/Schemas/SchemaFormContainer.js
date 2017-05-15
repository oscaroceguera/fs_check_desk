import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as schemaActions from '../../reducers/schemasReducer'
import * as modalActions from '../../reducers/modalReducer'
import * as modulesActions from '../../reducers/modulesReducer'
import { submitSchema } from '../../selectors/schemaSelector'
import aux from '../../helpers/AuxFunctions'

import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
import SchemaForm from '../../components/Schema/SchemaForm'
import Modules from '../../components/Schema/Modules'
import ItemsForm from '../../components/Schema/ItemsForm'
import CircularLoading from '../../components/Progress/CircularLoading'

// TODO: MODAL CONTAINER
// TODO: SCHEMA FORM CONTAINER
// TODO; MODULES CONTAIENR
// TODO: ITEMS CONTAINER
// TODO: PERSISTENCIA DE DATOS AL AHCER REFRESH
// TODO: SCHEMA FAIL MESSAGE
// TODO: REDUCER PARA GUARDAR MODULOS
// TODO: REDUCER PARA GUARDAR LOS ITEMS
class SchemaFormContainer extends React.Component {

  componentWillMount () {
    this.props.resetFields()
  }

  onChangeInput = (e, section, type) => this.props[type](section, e.target.name, e.target.value)

  handleErrorText = (section, field, type) => {
    const _section = this.props[section]
    return aux.errorTextMessage(_section[field], type)
  }

  saveSchema = (e) => this.props.setSavedSchema()

  updateSchema = (e) => {
    console.log('UPDATE');
  }

  handleModalOpen = () => this.props.openModal()

  handleModalClose = () => this.props.closeModal()

  render () {
    const { SSLoading, schema, submitSchema, modalStatus } = this.props
    return (
      <DashboardWrapper
        title={'Esquemas'}
        desc={'Crear Esquema'}
      >
        {
          SSLoading
            ? <CircularLoading />
            : <SchemaForm
                item={schema}
                handleErrorText={this.handleErrorText}
                onChangeInput={this.onChangeInput}
                submitSchema={submitSchema}
                updateSchema={this.updateSchema}
                saveSchema={this.saveSchema}
              />
        }
        <div style={{display: 'flex'}}>
          <Modules
            modalStatus={modalStatus}
            handleModalOpen={this.handleModalOpen}
            handleModalClose={this.handleModalClose}
            onChangeInput={this.onChangeInput}
            handleErrorText={this.handleErrorText}
          />
          <ItemsForm />
          {/* {schema.id && <Modules />}
          {schema.id && <ItemsForm />} */}
        </div>
      </DashboardWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const schemaJS = state.schemasReducer.toJS()
  const modalJS = state.modalReducer.toJS()
  const modulesJS = state.modulesReducer.toJS()
  return {
    schema: schemaJS.schema,
    submitSchema: !submitSchema(state),
    SSLoading: schemaJS.savedSchemasLoading,
    modalStatus: modalJS.open,
    module: modulesJS.module
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...schemaActions,
    ...modalActions,
    ...modulesActions
  }, dispatch)
}

// TODO: propTypes
export default connect(mapStateToProps, mapDispatchToProps)(SchemaFormContainer)
