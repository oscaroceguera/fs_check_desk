import React from 'react'
import PropTypes from 'prop-types'
import { SelectField, MenuItem } from 'material-ui'
import { TxtFieldResponsive, GenericSubmit } from '../../index'
import styled from 'styled-components'

const FormContainer = styled.div`
  padding: .5em;
  display: flex;
  flex-wrap: wrap;
`

const ItemsForm = ({item, modulesTypes, selectChange, handleErrorText, onChangeInput, submit, onSaved, onUpdate}) => (
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
      value={item.number || ''}
      errorText={handleErrorText('item', 'number', 'txtZero')}
      onChange={(e, section) => onChangeInput(e, 'item')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Orden'}
      name={'order'}
      width={'15%'}
      value={item.order || ''}
      errorText={handleErrorText('item', 'order', 'number')}
      onChange={(e, section, type) => onChangeInput(e, 'item')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Valor'}
      name={'value'}
      width={'15%'}
      value={item.value || ''}
      errorText={handleErrorText('item', 'value', 'number')}
      onChange={(e, section, type) => onChangeInput(e, 'item')}
    />
    <TxtFieldResponsive
      floatingLabelText={'Pregunta'}
      name={'answer'}
      width={'100%'}
      value={item.answer || ''}
      errorText={handleErrorText('item', 'answer', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'item')}
      multiLine
      rows={2}
    />
    <TxtFieldResponsive
      floatingLabelText={'Métrica'}
      name={'recommend'}
      width={'100%'}
      value={item.recommend || ''}
      errorText={handleErrorText('item', 'recommend', 'txt')}
      onChange={(e, section, type) => onChangeInput(e, 'item')}
      multiLine
      rows={2}
    />
    <GenericSubmit
      disabled={submit}
      label={item.id ? 'Actualizar' : 'Guardar'}
      onClick={item.id ? onUpdate : onSaved}
    />
  </FormContainer>
)

ItemsForm.propTypes = {
  item: PropTypes.object.isRequired,
  modulesTypes: PropTypes.array.isRequired,
  selectChange: PropTypes.func.isRequired,
  handleErrorText: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  submit: PropTypes.bool.isRequired,
  onSaved: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
}

export default ItemsForm
