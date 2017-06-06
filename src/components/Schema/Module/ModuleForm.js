import React from 'react'
import PropTypes from 'prop-types'
import TxtFieldResponsive from '../../Forms/TxtFieldResponsive'
import GenericSubmit from '../../Forms/GenericSubmit'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ModuleForm = ({ handleErrorText, onChangeInput, submit, onSaved, onUpdate, module }) => (
  <Container>
    <TxtFieldResponsive
      floatingLabelText={'Número'}
      name={'number'}
      width={'15%'}
      value={module.number || ''}
      errorText={handleErrorText('module', 'number', 'txtZero')}
      onChange={(e, section, type) => onChangeInput(e, 'module')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Orden'}
      name={'order'}
      width={'15%'}
      value={module.order || ''}
      errorText={handleErrorText('module', 'order', 'number')}
      onChange={(e, section, type) => onChangeInput(e, 'module')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Nombre'}
      name={'name'}
      width={'60%'}
      value={module.name || ''}
      errorText={handleErrorText('module', 'name', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'module')}
    />
    <GenericSubmit
      disabled={submit}
      label={module.id ? 'Actualizar' : 'Guardar'}
      onClick={module.id ? onUpdate : onSaved}
    />
  </Container>
)

ModuleForm.propTypes = {
  handleErrorText: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  submit: PropTypes.bool.isRequired,
  onSaved: PropTypes.func.isRequired,
  module: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default ModuleForm
