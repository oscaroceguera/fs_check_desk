import React from 'react'
import TxtFieldResponsive from '../../Forms/TxtFieldResponsive'
import GenericSubmit from '../../Forms/GenericSubmit'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const ModuleForm = ({ handleErrorText, onChangeInput, submit, onSaved }) => (
  <Container>
    <TxtFieldResponsive
      floatingLabelText={'Número'}
      name={'number'}
      width={'15%'}
      errorText={handleErrorText('module', 'number', 'txtZero')}
      onChange={(e, section, type) => onChangeInput(e, 'module')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Orden'}
      name={'order'}
      width={'15%'}
      errorText={handleErrorText('module', 'order', 'number')}
      onChange={(e, section, type) => onChangeInput(e, 'module')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Nombre'}
      name={'name'}
      width={'60%'}
      errorText={handleErrorText('module', 'name', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'module')}
    />
    <GenericSubmit
      disabled={submit}
      label={'Guardar'}
      onClick={onSaved}
    />
  </Container>
)

ModuleForm.propTypes = {
  handleErrorText: React.PropTypes.func.isRequired,
  onChangeInput: React.PropTypes.func.isRequired,
  submit: React.PropTypes.bool.isRequired,
  onSaved: React.PropTypes.func.isRequired
}

export default ModuleForm