import React from 'react'
import {SelectField, MenuItem} from 'material-ui'
import TxtFieldResponsive from '../../Forms/TxtFieldResponsive'
import styled from 'styled-components'
import GenericSubmit from '../../Forms/GenericSubmit'

const FormContainer = styled.div`
  padding: .5em;
  display: flex;
  flex-wrap: wrap;
`

const ItemsForm = ({item, modulesTypes, selectChange, handleErrorText, onChangeInput, submit, onSaved}) => (
  <FormContainer>
    <SelectField
      errorText={handleErrorText('item', 'moduleId', 'txt')}
      floatingLabelText={'Módulo'}
      value={item.moduleId}
      onChange={selectChange}
      fullWidth
    >
      { modulesTypes.map((i, k) => <MenuItem key={k} value={i._id} primaryText={i.name} />) }
    </SelectField>
    <TxtFieldResponsive
      floatingLabelText={'Número'}
      name={'number'}
      width={'15%'}
      errorText={handleErrorText('item', 'number', 'txtZero')}
      onChange={(e, section) => onChangeInput(e, 'item')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Orden'}
      name={'order'}
      width={'15%'}
      errorText={handleErrorText('item', 'order', 'number')}
      onChange={(e, section, type) => onChangeInput(e, 'item')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Valor'}
      name={'value'}
      width={'15%'}
      errorText={handleErrorText('item', 'value', 'number')}
      onChange={(e, section, type) => onChangeInput(e, 'item')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Pregunta'}
      name={'answer'}
      width={'100%'}
      errorText={handleErrorText('item', 'answer', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'item')}
      multiLine
      rows={2}
    />
    <TxtFieldResponsive
      floatingLabelText={'Métrica'}
      name={'recommend'}
      width={'100%'}
      errorText={handleErrorText('item', 'recommend', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'item')}
      multiLine
      rows={2}
    />
    <GenericSubmit
      disabled={submit}
      label={'Guardar'}
      onClick={onSaved}
    />
  </FormContainer>
)

ItemsForm.propTypes = {
  item: React.PropTypes.object.isRequired,
  modulesTypes: React.PropTypes.array.isRequired,
  selectChange: React.PropTypes.func.isRequired,
  handleErrorText: React.PropTypes.func.isRequired,
  onChangeInput: React.PropTypes.func.isRequired,
  submit: React.PropTypes.bool.isRequired,
  onSaved: React.PropTypes.func.isRequired
}

export default ItemsForm
