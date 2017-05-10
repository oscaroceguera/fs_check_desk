import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as schemaActions from '../../reducers/schemasReducer'
import aux from '../../helpers/AuxFunctions'
import GenericSubmit from '../../components/Forms/GenericSubmit'

import TxtFieldResponsive from '../../components/Forms/TxtFieldResponsive'
import DashboardWrapper from '../../components/Wrappers/DashboardWrapper'
// import {TextField} from 'material-ui'

// TODO: Comprobacion de maximo de caracteres
// TODO: LOADING SAVE schema
// TODO: ALguardar mostrar el id del elemento guardado
// TODO: cuando se guarde cambiar el boton por el de actualizar
// TODO: Pasar el guardar schema a un compoennte
class SchemaFormContainer extends React.Component {
  // TODO: generic onchange for all fields
  onChangeInput = (e) => {
    this.props.setFields('schema', e.target.name, e.target.value)
  }
  // TODO: generic handleErrorText for all fields
  handleErrorText = (field, type) => {
    const { schema } = this.props
    return aux.errorTextMessage(schema[field], type)
  }

  saveSchema = (e) => this.props.setSavedSchema()

  render () {
    return (
      <DashboardWrapper
          title={'Esquemas'}
          desc={'Crear Esquema'}
        >
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
          {/* <TextField
            floatingLabelText={'ID'}
          /> */}
          <TxtFieldResponsive
            floatingLabelText={'Nombre'}
            name={'name'}
            errorText={this.handleErrorText('name', 'txt')}
            onChange={this.onChangeInput}
          />
          <TxtFieldResponsive
            floatingLabelText={'Versión'}
            name={'version'}
            width={'15%'}
            errorText={this.handleErrorText('version', 'txt')}
            onChange={this.onChangeInput}
          />
          <TxtFieldResponsive
            floatingLabelText={'Descripción'}
            name={'description'}
            width={'100%'}
            errorText={this.handleErrorText('description', 'txt')}
            onChange={this.onChangeInput}
          />
          <GenericSubmit
            disabled={false}
            label={'Guardar'}
            onClick={this.saveSchema}
          />
        </div>
      </DashboardWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  const stateJS = state.schemasReducer.toJS()
  return {
    schema: stateJS.schema,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...schemaActions
  }, dispatch)
}

// TODO: propTypes
export default connect(mapStateToProps, mapDispatchToProps)(SchemaFormContainer)
